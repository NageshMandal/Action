const Tesseract = require("tesseract.js");
const fs = require("fs");
const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

class componentScraper {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  static async initialize() {
    puppeteerExtra.use(pluginStealth());
  }

  async componentData(params) {
    const { searchQuery } = params;
    const browser = await puppeteerExtra.launch({ headless: false });
    const page = await browser.newPage();
    const searchUrl = `https://robu.in/?s=+++%09+${encodeURIComponent(searchQuery)}&product_cat=0&post_type=product`;

    try {
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
      await page.waitForSelector("li.product.type-product", { timeout: 30000 });

      const products = await page.$$eval("li.product.type-product", items => {
        return items.map(item => {
          const title = item.querySelector("h2.woocommerce-loop-product__title").innerText;
          const price = item.querySelector(".woocommerce-Price-amount.amount").innerText;
          const link = item.querySelector(".woocommerce-LoopProduct-link").href;
          const imageSrc = item.querySelector("img.attachment-woocommerce_thumbnail").src;
          const description = item.querySelector(".product-short-description")?.innerText || "";

          return { title, price, link, imageSrc, description };
        });
      });

      console.log("Scraped Products:", products);

      // Format the scraped data into a string
      const resultString = products.map((product) => {
        return `Name: ${product.title}\nPrice: ${product.price}\nLink: ${product.link}\nImage: ${product.imageSrc}\nDescription: ${product.description}\n\n`;
      }).join('');

      return resultString;
    } catch (error) {
      console.error("Error during scraping:", error);
      return "";
    } finally {
      await browser.close();
    }
  }

  async run(params) {
    try {
      await componentScraper.initialize();
      const data = await this.componentData(params);
      if (data) {
        console.log("Scraping completed successfully. Here is the data:\n", data);
      } else {
        console.error("Error: No data found.");
      }
      return data;
    } catch (error) {
      console.error("Error during scraping:", error);
    }
  }
}

module.exports = componentScraper;





// const Tesseract = require("tesseract.js");
// const fs = require("fs");
// const puppeteer = require("puppeteer");
// const puppeteerExtra = require("puppeteer-extra");
// const pluginStealth = require("puppeteer-extra-plugin-stealth");

// class componentScraper {
//   constructor(url, options) {
//     this.url = url;
//     this.options = options;
//   }

//   static async initialize() {
//     puppeteerExtra.use(pluginStealth());
//   }

//   async componentData(params) {
//     const { searchQuery } = params;
//     const browser = await puppeteerExtra.launch({ headless: false });
//     const page = await browser.newPage();
//     let pageNumber = 1; // Start with page 1
//     let products = [];

//     try {
//       while (true) {
//         const searchUrl = `https://robu.in/page/${pageNumber}/?s=${encodeURIComponent(searchQuery)}&product_cat=0&post_type=product`;
//         await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
//         await page.waitForSelector("li.product.type-product", { timeout: 30000 });
//         await page.waitForTimeout(30000);

//         const newProducts = await page.$$eval("li.product.type-product", items => {
//           return items.map(item => {
//             const title = item.querySelector("h2.woocommerce-loop-product__title").innerText;
//             const price = item.querySelector(".woocommerce-Price-amount.amount").innerText;
//             const link = item.querySelector(".woocommerce-LoopProduct-link").href;
//             const imageSrc = item.querySelector("img.attachment-woocommerce_thumbnail").src;
//             const description = item.querySelector(".product-short-description")?.innerText || "";

//             return { title, price, link, imageSrc, description };
//           });
//         });

//         // Break the loop if no more products are found
//         if (newProducts.length === 0) break;

//         products = [...products, ...newProducts];
//         pageNumber++; // Move to the next page
//       }

//       if (products.length === 0) {
//         // Display 404 message if no products found
//         return ".display-3 = 404";
//       }

//       console.log("Scraped Products:", products);

//       // Format the scraped data into a string
//       const resultString = products.map((product) => {
//         return `Name: ${product.title}\nPrice: ${product.price}\nLink: ${product.link}\nImage: ${product.imageSrc}\nDescription: ${product.description}\n\n`;
//       }).join('');

//       return resultString;
//     } catch (error) {
//       console.error("Error during scraping:", error);
//       return "";
//     } finally {
//       await browser.close();
//     }
//   }

//   async run(params) {
//     try {
//       await componentScraper.initialize();
//       const data = await this.componentData(params);
//       if (data) {
//         console.log("Scraping completed successfully. Here is the data:\n", data);
//       } else {
//         console.error("Error: No data found.");
//       }
//       return data;
//     } catch (error) {
//       console.error("Error during scraping:", error);
//     }
//   }
// }

// module.exports = componentScraper;
