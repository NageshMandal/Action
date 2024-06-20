class Regex {
    constructor() {

    }
    /**
     * Applies a regex operation on a given string.
     * 
     * @param {Object} params - Parameters containing the string, regex pattern, and replacement string.
     * @return {String} - The result after applying the regex operation.
     */
    applyRegex(params) {
        const { inputString, regexPattern, replacementString } = params;

        // Creating a RegExp object from the provided pattern.
        const regex = new RegExp(regexPattern, 'g');

        // Replacing the occurrences based on the regex pattern.
        return inputString.replace(regex, replacementString);
    }

    /**
     * Removes specific characters or patterns from a string based on regex.
     * 
     * @param {Object} params - Parameters containing the string and regex pattern for removal.
     * @return {String} - The result after removal.
     */
    removeByRegex(params) {
        const { inputString, regexPattern } = params;
        const regex = new RegExp(regexPattern, 'g');
        return inputString.replace(regex, '');
    }

    /**
     * Finds and returns matches based on a regex pattern.
     * 
     * @param {Object} params - Parameters containing the string and regex pattern for matching.
     * @return {Array} - An array of matches found.
     */
    findMatches(params) {
        const { inputString, regexPattern } = params;
        const regex = new RegExp(regexPattern, 'g');
        return inputString.match(regex) || [];
    }

    // Additional regex-based methods can be added here...
}

module.exports = Regex;
