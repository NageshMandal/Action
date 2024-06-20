const Tesseract = require("tesseract.js");
const fs = require("fs");
const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

class WebScraper {
  constructor(url, options) {}

  static async initialize() {}

  async scrapeData(params) {
    const { searchQuery } = params;
    puppeteerExtra.use(pluginStealth());
    let browser = await puppeteerExtra.launch({ headless: false });
    const page = await browser.newPage();
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
    await page.waitForSelector(".LC20lb", { timeout: 30000 });

    let finalTextData = ""; // Initialize finalTextData as an empty string

    const firstResult = await page.$(".LC20lb");
    if (firstResult) {
      await firstResult.click();
      await page.waitForNavigation({ waitUntil: "networkidle0", timeout: 300000 });

      const screenshotPath = `${searchQuery}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });

      try {
          const { data: {text} } = await Tesseract.recognize(`./${screenshotPath}`, 'eng', { logger: e => console.log(e) });
          fs.writeFileSync(`${searchQuery}.md`, text, 'utf8');
          console.log("Text saved to recognized_text.md");
          finalTextData = text; // Store the recognized text in finalTextData
      } catch (error) {
          console.error("Error during OCR:", error);
      }
    } else {
      console.error("No search results found.");
    }

    await browser.close(); // Close the browser after the entire process

    // Regardless of the outcome, finalTextData will be returned; it remains an empty string if no text was recognized or if an error occurred
    return finalTextData;
}

  async run(params) {
    try {
      await this.initialize();
      const data = await this.scrapeData(params);
      if (data) {
        await this.writeToCSV(data, "search_results.csv");
        console.log("Scraping and saving data completed successfully.");
      } else {
        console.error("Error: No data to save.");
      }
    } catch (error) {
      console.error("Error during scraping:", error);
    }
  }
}

module.exports = WebScraper;