// const puppeteer = require("puppeteer");

// class Blackbox {
//   constructor(url, options) {}

//   static async initialize() {}

//   async serachData(params) {
//     const { inputData, pre, msec } = params;
  
//     try {
//       const browser = await puppeteer.launch({ headless: false });
//       const page = await browser.newPage();
  
//       const searchUrl = `https://www.blackbox.ai/`;
//       await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
  
//       // Fill input data into the textarea
//       if (inputData) {
//         await page.type("#chat-input-box", pre);
//         await page.type("#chat-input-box", inputData);
//       } else {
//         await page.type("#chat-input-box", pre);
//       }
  
//       // Click the SEND button
//       await page.click("button[type='submit']");
  
//       // Wait for the specified time after clicking the SEND button
//       await page.waitForTimeout(msec);
  
//       // Wait for the data to load
//       await page.waitForSelector(".prose:nth-of-type(2)");
  
//       // Extract the data from the page
//       const results = await page.evaluate(() => {
//         const elements = document.querySelectorAll(".prose")[1];
//         return elements ? elements.textContent.trim() : null;
//       });
  
//       await browser.close();
  
//       return results ? [results] : [];
//     } catch (error) {
//       console.error("Error during data scraping:", error);
//       return [];
//     }
  
//   }  

//   async run(params) {
//     try {
//       await this.initialize();
//       const data = await this.serachData(params);
//       if (data.length > 0) {
//         console.log("hera is the result data:", data);
//         console.log("Scraping and saving successfully.");
//       } else {
//         console.error("Error: Nodata scraped.");
//       }
//     } catch (error) {
//       console.error("Error during data scraping:", error);
//     }
//   }
// }

// module.exports = Blackbox;




const puppeteer = require("puppeteer");

class Blackbox {
  constructor(url, options) {}

  static async initialize() {
    // Initialize any necessary components here
  }

  async serachData(params) {
    const { inputData, pre, msec } = params;

    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      const searchUrl = `https://www.blackbox.ai/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

      // Ensure that the values are strings
      const preText = String(pre || "");
      const inputText = String(inputData || "");

      // Fill input data into the textarea
      if (inputText) {
        const finalData = preText +"---------"+ inputText ;
        await page.evaluate((data) => {
          document.querySelector("#chat-input-box").value = data;
        }, finalData);
        await page.type("#chat-input-box", "----");
      } else {
        await page.type("#chat-input-box", preText);
      }

      // Click the SEND button
      await page.click("button[type='submit']");

      // Wait for the specified time after clicking the SEND button
      await page.waitForTimeout(msec);

      // Wait for the data to load
      await page.waitForSelector(".prose:nth-of-type(2)");

      // Extract the data from the page
      const results = await page.evaluate(() => {
        const elements = document.querySelectorAll(".prose")[1];
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
      const data = await this.serachData(params);
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

module.exports = Blackbox;
