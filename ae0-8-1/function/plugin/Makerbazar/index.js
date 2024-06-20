const puppeteer = require("puppeteer");
const puppeteerExtra = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");

// Use the stealth plugin
puppeteerExtra.use(pluginStealth());

class makerbazarScraper {
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }

  static async initialize() {
    // No need to use puppeteerExtra.use(pluginStealth()) here again
  }

  async makerbazarData(params) {
    const { searchQuery } = params;
    const browser = await puppeteerExtra.launch({ headless: false }); // Change to 'true' for production
    const page = await browser.newPage();
    const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}&sca_esv=d8f10933e16e7e97&sca_upv=1&rlz=1C1CHZN_enIN975IN975&biw=1536&bih=730&tbm=shop&sxsrf=ADLYWIKdwwigKgrxwpU1C5UOQ_3mM-_CiA:1717301753090&tbs=p_ord:p&ei=-fFbZvHkBPvtseMPibqiiAU&ved=0ahUKEwixxdvHh7yGAxX7dmwGHQmdCFEQuw0IpQsoAg`;

    try {
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });
      await page.waitForSelector(".sh-dgr__grid-result", { timeout: 30000 });

      const products = await page.$$eval(".sh-dgr__grid-result", items => {
        return items.map(item => {
          const titleElement = item.querySelector(".Lq5OHe h3.tAxDx");
          const priceElement = item.querySelector(".a8Pemb.OFFNJ");
          const linkElement = item.querySelector(".Lq5OHe.eaGTj");
          const imageElement = item.querySelector(".ArOc1c img");

          return {
            title: titleElement ? titleElement.innerText : "No title",
            price: priceElement ? priceElement.innerText : "No price",
            link: linkElement ? linkElement.href : "No link",
            imageSrc: imageElement ? imageElement.src : "No image"
          };
        });
      });

      console.log("Scraped Products:", products);

      // Format the scraped data into a string
      const resultString = products.map((product) => {
        return `Name: ${product.title}\nPrice: ${product.price}\nLink: ${product.link}\nImage: ${product.imageSrc}\n\n`;
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
      await this.constructor.initialize();
      const data = await this.makerbazarData(params);
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

module.exports = makerbazarScraper;
