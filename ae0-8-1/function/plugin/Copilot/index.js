const puppeteer = require("puppeteer");

class Copilot {
  constructor(url, options) {}

  static async initialize() {
    // Initialize any necessary components here
  }

  async copilotSerach(params) {
    const { inputData, pre, msec } = params;

    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      const searchUrl = `https://copilot.microsoft.com/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

      // Ensure that the values are strings
      const preText = String(pre || "");
      const inputText = String(inputData || "");

      // Wait for the iframe to load if the element is inside an iframe
    const frames = await page.frames();
    const frame = frames.find(f => f.name() === 'frameName'); // Replace 'frameName' with the actual frame name or criteria

    const searchBoxSelector = '#searchbox';
    let searchBox;

    if (frame) {
        await frame.waitForSelector(searchBoxSelector);
        searchBox = await frame.$(searchBoxSelector);
    } else {
        await page.waitForSelector(searchBoxSelector);
        searchBox = await page.$(searchBoxSelector);
    }

    if (!searchBox) {
        console.error('Search box not found!');
        await browser.close();
        return;
    }

    // Type into the textarea
    const textToType = 'Your search query'; // Replace with the text you want to input
    if (frame) {
        await frame.type(searchBoxSelector, textToType);
    } else {
        await page.type(searchBoxSelector, textToType);
    }

    //   // Fill input data into the textarea
    //   if (inputText) {
    //     const finalData = preText +"---------"+ inputText ;
    //     await page.evaluate((data) => {
    //       document.querySelector("textarea").value = data;
    //     }, finalData);
    //     await page.type("textarea", "----");
    //   } else {
    //     await page.type("textarea", preText);
    //   }

      // Click the SEND button
      await page.click("button[type='button']");

      // Wait for the specified time after clicking the SEND button
      await page.waitForTimeout(msec);

      // Wait for the data to load
      await page.waitForSelector(".ac-textBlock");

      // Extract the data from the page
      const results = await page.evaluate(() => {
        const elements = document.querySelectorAll(".ac-textBlock")[1];
        return elements ? elements.textContent.trim() : null;
      });

      await browser.close();

      return results ? [results] : [];
    } catch (error) {
      console.error("Error during data scraping:", error);
      return [];
    }
  }

  async run(params) {
    try {
      await this.initialize();
      const data = await this.copilotSerach(params);
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

module.exports = Copilot;
