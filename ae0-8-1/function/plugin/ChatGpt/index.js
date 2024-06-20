const puppeteer = require("puppeteer");

class ChatGPT {
  constructor(url, options) {}

  static async initialize() {}

  async gptSearch(params) {
    const { inputData, pre, msec , trainData } = params;
  
    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();
  
      const searchUrl = `https://chat.openai.com/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
  
      // Fill input data into the textarea
      if (inputData) {
        await page.type("#prompt-textarea", pre);
        await page.type("#prompt-textarea", inputData);
      } 
      if (trainData){
        const finalData = pre + trainData ;
        await page.evaluate((data) => {
          document.querySelector("#prompt-textarea").value = data;
        }, finalData);
        await page.type("#prompt-textarea", "----");
      }
      else {
        await page.type("#prompt-textarea", pre);
      }
  
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
      const data = await this.gptSearch(params);
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

module.exports = ChatGPT;
