const puppeteer = require("puppeteer");

const trainData = `
action engine plugins :

1 > puppeteer: 
   - plugin: puppeteer
   - Method: scrapeData
   - Params: searchQuery
2> blackbox: 
   - plugin: chatgpt
   - Method: searchData 
   - Params: 
     pre: " "
     inputData: "[{{data-1}}]"
     msec: 30000 // 1000 = 1sec 
     store: "data2"

Example (1) to make an Action Engine Flow:

steps: [
  {
    name: "scrapeData",
    plugin: "puppeteer",
    method: "scrapeData",
    params: {
      searchQuery: "aws pricing page ",
    },
    schema: {
      searchQuery: { type: "string", required: true },
    },
    store: "awsPricing",
  },
  {
    name: "scrapeData",
    plugin: "puppeteer",
    method: "searchData",
    params: {
      searchQuery: "google cloud pricing page",
    },
    schema: {
      searchQuery: { type: "string", required: true },
    },
    store: "googleCloudPricing",
  },
  {
    name: "scrapeData",
    plugin: "puppeteer",
    method: "searchData",
    params: {
      pre: "compair both the pricing details of aws and google cloud and give me the best price what to use ",
      inputData: "[{{awsPricing}},{{googleCloudPricing}}]",
      msec: 30000 // 1000 = 1sec 
    },
    schema: {
      inputData: { type: "object", required: true },
      pre: { type: "string", required: true },
      msec: { type: "number", required: true},
    },
    store: "finalOutput",
  },
]

Example (2) to make an Action Engine Flow:

steps: [
  {
    name: "scrapeData",
    plugin: "puppeteer",
    method: "scrapeData",
    params: {
      searchQuery: "gitlab api endpoint page",
    },
    schema: {
      searchQuery: { type: "string", required: true },
    },
    store: "gitLabApi",
  },
  {
    name: "serachData",
    plugin: "blackbox",
    method: "serachData",
    params: {
      pre: "give me the list of gitlab api endpoints from this data ",
      inputData: "[{{gitLabApi}}]",
      msec: 30000 // 1000 = 1sec 
    },
    schema: {
      inputData: { type: "object", required: true },
      pre: { type: "string", required: true },
      msec: { type: "number", required: true},
    },
    store: "finalOutput",
  },
],
`;

class AeFlow {
  constructor(url, options) {}

  static async initialize() {}

  async aeFlows(params) {
    const { pre, msec } = params;

    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      const searchUrl = `https://chat.openai.com/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

      const finalData = pre + trainData ;
      
      // Set the value of the text area directly using JavaScript evaluation
      await page.evaluate((data) => {
        document.querySelector("#prompt-textarea").value = data;
      }, finalData);

      await page.type("#prompt-textarea", "----");

      // Click the SEND button
      await page.click("button[data-testid='send-button']");

      // Wait for the specified time after clicking the SEND button
      await page.waitForTimeout(msec);

      // Wait for the data to load
      await page.waitForSelector("code");

      // Extract the data from the specified div
      const results = await page.$$eval("code", elements => {
        return elements.map(element => element.textContent.trim());
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
      const data = await this.aeFlows(params);
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

module.exports = AeFlow;
