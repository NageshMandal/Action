const puppeteer = require("puppeteer");

class TripPlanner {
  constructor(url, options) {}

  static async initialize() {}

  async locationData(params) {
    const { searchQuery } = params;
    let browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const searchUrl = `https://www.google.com/maps/search/${encodeURIComponent(searchQuery)}`;
    await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

    let resultString = ''; // Initialize an empty string to store the formatted data

    try {
      // Wait for the selector containing search results
      await page.waitForSelector(".Nv2PK", { timeout: 30000 });

      // Extract data from each search result
      const results = await page.$$eval(".Nv2PK", (elements) => {
        return elements.map((element) => {
          const name = element.querySelector(".qBF1Pd").textContent.trim();
          const rating = element.querySelector(".MW4etd").textContent.trim();
          const reviews = element.querySelector(".UY7F9").textContent.trim();
          const address = element.querySelectorAll(".W4Efsd")[1].textContent.trim();
          const description = element.querySelector(".W4Efsd:last-child").textContent.trim();
          const image = element.querySelector("img").getAttribute("src");
          const priceElement = element.querySelector(".wcldff.fontHeadlineSmall.Cbys4b");
          const price = priceElement ? priceElement.textContent.trim() : null;
          const hrefElement = element.querySelector(".hfpxzc");
          const href = hrefElement ? hrefElement.getAttribute("href") : null;
          return { name, rating, reviews, address, description, image, price, href };
        });
      });

      // Format the scraped data into a string
      resultString = results.map((result) => {
        return `Name: ${result.name}\nRating: ${result.rating}\nReviews: ${result.reviews}\nAddress: ${result.address}\nDescription: ${result.description}\nImage: ${result.image}\nPrice: ${result.price}\nLink: ${result.href}\n\n`;
      }).join('');
    } catch (error) {
      console.error("Error scraping location data:", error);
    }

    await browser.close(); // Close the browser after scraping

    return resultString; // Return the formatted string
  }

  async run(params) {
    try {
      await this.initialize();
      const data = await this.locationData(params);
      if (data.length > 0) {
        console.log("Scraped location data:", data);
        console.log("Scraping and saving location data completed successfully.");
      } else {
        console.error("Error: No location data scraped.");
      }
    } catch (error) {
      console.error("Error during location data scraping:", error);
    }
  }
}

module.exports = TripPlanner;
