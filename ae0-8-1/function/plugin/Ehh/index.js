const ehhDataSet = `
objective: "Teach GPT-3.5 to transform HTML structures into JSON templates for a Template Engine, using the 'repeat' directive for repeating elements, and to generate corresponding JSON data for these templates."
  rules_and_guidelines:
    - html_tag_conversion: "Convert HTML tag names into the 'tag' field in the JSON template."
    - attributes_translation: "Map HTML attributes to a JSON 'attributes' object."
    - handling_children: "Nested HTML elements should be represented in a 'children' array."
    - text_content: "Any text within an HTML element is placed in the 'content' field."
    - repeating_elements_and_repeat_directive: 
        description: "Identify repeating elements in the HTML (like items in a list). Use the 'repeat' keyword in the JSON template to represent these elements. The value of 'repeat' should correspond to a key in the JSON data."
    - providing_corresponding_data:
        description: "Alongside the JSON template, provide a JSON data object. This data object should contain arrays or objects that correspond to any 'repeat' placeholders in the template."

  example_for_training:
    html_input: |
      <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
      </ul>
    expected_json_template: |
      {
        "tag": "ul",
        "attributes": {},
        "children": [
          {
            "tag": "li",
            "repeat": "fruits",
            "content": "{{fruitName}}"
          }
        ]
      }
    expected_json_data: |
      {
        "fruits": [
          { "fruitName": "Apple" },
          { "fruitName": "Banana" },
          { "fruitName": "Cherry" }
        ]
      }
`;

const ehhdata = " Using the following HTML snippet into a JSON template using the 'repeat' "

const resulttype = " i need JSON Output Only"

const puppeteer = require("puppeteer");

class ehh {
  constructor(url, options) {}

  static async initialize() {}

  async ehhData(params) {
    const { pre, msec } = params;

    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      const searchUrl = `https://chat.openai.com/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

      const finalData = ehhDataSet + ehhdata + pre + resulttype;
      // Set the value of the text area directly using JavaScript evaluation
      await page.evaluate((data) => {
        document.querySelector("#prompt-textarea").value = data;
      }, finalData);

      await page.type("#prompt-textarea", "---");

      // Click the SEND button
      await page.click("button[data-testid='send-button']");

      // Wait for the specified time after clicking the SEND button
      await page.waitForTimeout(msec);

      // Wait for the data to load
      await page.waitForSelector(".w-full.text-token-text-primary");
  
      // Extract the data from the page
      const results = await page.evaluate(() => {
        const elements = document.querySelectorAll(".w-full.text-token-text-primary")[1];
        return elements ? elements.textContent.trim() : null;
      });
      await browser.close();

      return results ? results : [];
    } catch (error) {
      console.error("Error during data scraping:", error);
      return [];
    }
  }

  async run(params) {
    try {
      await this.initialize();
      const data = await this.ehhData(params);
      if (data.length > 0) {
        console.log("Here is the result data:", data);
        console.log("Scraping and saving successfully.");
      } else {
        console.error("Error: No data scraped.");
      }
    } catch (error) {
      console.error("Error during data scraping:", error);
    }
  }
}

module.exports = ehh;
