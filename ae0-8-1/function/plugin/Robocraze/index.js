const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

class RobocrazeScraper {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  static async initialize() {
    puppeteerExtra.use(pluginStealth());
  }

  async PartsData(params) {
    const { searchQuery } = params;
    const browser = await puppeteerExtra.launch({ headless: false });
    const page = await browser.newPage();
    const searchUrl = `https://robocraze.com/search?q=${encodeURIComponent(searchQuery)}&options%5Bprefix%5D=last`;

    try {
        await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 300000 });
        await page.waitForSelector("li.grid__item", { timeout: 300000 });

      const products = await page.$$eval("li.grid__item", items => {
        return items.map(item => {
          const titleElement = item.querySelector("h3.card__heading");
          const title = titleElement ? titleElement.innerText.trim() : "";

          const priceElement = item.querySelector(".price__sale .price-item--sale") || item.querySelector(".price__regular .price-item");
          const price = priceElement ? priceElement.innerText.trim() : "";

          const linkElement = item.querySelector("h3.card__heading a");
          const link = linkElement ? `https://robocraze.com${linkElement.getAttribute('href')}` : "";

          const imageElement = item.querySelector(".card__media img");
          const imageSrc = imageElement ? imageElement.src : "";

          const descriptionElement = item.querySelector(".card__information .caption-large");
          const description = descriptionElement ? descriptionElement.innerText.trim() : "";

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
      console.error("Error during scraping:", error.message);
      return "";
    } finally {
      await browser.close();
    }
  }

  async run(params) {
    try {
      await RobocrazeScraper.initialize();
      const data = await this.PartsData(params);
      if (data) {
        console.log("Scraping completed successfully. Here is the data:\n", data);
      } else {
        console.error("Error: No data found.");
      }
      return data;
    } catch (error) {
      console.error("Error during scraping:", error.message);
    }
  }
}

module.exports = RobocrazeScraper;






