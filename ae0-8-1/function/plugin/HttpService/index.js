// Define constants for multipart/form-data boundaries
const boundary = '-------314159265358979323846';
const delimiter = "\r\n--" + boundary + "\r\n";
const close_delim = "\r\n--" + boundary + "--";

class HttpService {
    constructor() {

    }

    // Method to build a complete URL from a base URL and query parameters
    urlBuilder(params) {
        console.log("url builder called");
        const { url, queryParams } = params;
        console.log("UrlBuilder :" + url, queryParams);

        // Combines base URL with encoded query parameters
        var service = url + "?" + HttpService.buildEncodedUri(queryParams);
        console.log(service);
        return service;
    }

    // Method to construct a request object for fetch API
    requestBuilder(method, headers, body) {
        var request = {
            method: method, // HTTP method (GET, POST, etc.)
            cache: 'no-cache', // Cache control
            headers: headers, // HTTP headers
        }
        request['body'] = body; // Request body
        return request;
    }

    // Method to handle file upload, returns a multipart/form-data body
    async FileUpload(file) {
        return new Promise((resolve, reject) => {
            var contentType = file.type || 'application/octet-stream';
            var metadata = {
                'title': file.name,
                'name': file.name,
                'mimeType': contentType,
            }
            const reader = new FileReader();
            reader.readAsBinaryString(file);
            reader.onload = () => {
                var base64Data = btoa(reader.result); // Encode file content in base64
                // Construct multipart request body
                var multipartRequestBody =
                    delimiter + 'Content-Type: application/json\r\n\r\n' + JSON.stringify(metadata) +
                    delimiter + 'Content-Type: ' + contentType + '\r\n' +
                    'Content-Transfer-Encoding: base64\r\n' + '\r\n' + base64Data + close_delim;

                resolve(multipartRequestBody);
            };
            reader.onerror = error => reject(error);
        });
    }

    // Method to make a fetch request and process the response
    async fetchRequest(params) {
        console.log("Fetch method called");
        const { url, request } = params
        var res;
        await fetch(url, request)
            .then(response => {
                
                var result = response.text();
                var result2;
                try {
                    result2 = JSON.parse(result); // Try to parse result as JSON
                } catch (err) {
                    result2 = result; // Fallback to raw text if JSON parsing fails
                }
                return result2;
            })
            .then(data => {
                
                if (!data.error) {
                    res = data; // Assign response data if no error
                } else {
                    console.log(data.errors); // Log errors if present
                }
            });

        return res;
    }

    // Method to encode a URI component
    static buildEncodedUri(request) {
        console.log("builenodedUri executoed");
        const response = [];
        for (let d in request) {
            // Encode each key-value pair
            response.push(encodeURIComponent(d) + '=' + encodeURIComponent(request[d]));
        }
        return response.join('&'); // Join pairs into a single query string
    }

    // Method to decode a URI component
    unbuildEndodedUri(request) {
        var urifragment = request.split("&"), data = {}, i, parts;

        for (i = 0; i < urifragment.length; i++) {
            parts = urifragment[i].split("=");
            if (parts.length < 2) {
                parts.push("");
            }
            // Decode each key-value pair and store in an object
            data[decodeURIComponent(parts[0])] = decodeURIComponent(parts[1]);
        }
        console.log(data);
        return data;
    }

    // Simple logging method
    log(msg) {
        console.log("log Method called");
        console.log(msg)
        return msg
    }
}

module.exports = HttpService;
