
const PariData = `
use this given components to create the html pages
dont write any css only use pari components

The given html componensts are from pari css library
<link rel="stylesheet" href="./beauty/pari.css" />

<div class="container">
    <!-- Header -->
    <header>
      <hgroup>
        <h1>Pari</h1>
        <p>A class-less example, with all basic elements.</p>
      </hgroup>
    </header>
    <!-- ./ Header -->

    <!-- Main -->
    <main>
      <!-- Typography-->
      <section id="typography">
        <h2>Typography</h2>
        <p>
          Aliquam lobortis vitae nibh nec rhoncus. Morbi mattis neque eget
          efficitur feugiat. Vivamus porta nunc a erat mattis, mattis feugiat
          turpis pretium. Quisque sed tristique felis.
        </p>

        <!-- Blockquote-->
        <blockquote>
          "Maecenas vehicula metus tellus, vitae congue turpis hendrerit non.
          Nam at dui sit amet ipsum cursus ornare."
          <footer>
            <cite>- Phasellus eget lacinia</cite>
          </footer>
        </blockquote>

        <!-- Lists-->
        <h3>Lists</h3>
        <ul>
          <li>Aliquam lobortis lacus eu libero ornare facilisis.</li>
          <li>Nam et magna at libero scelerisque egestas.</li>
          <li>Suspendisse id nisl ut leo finibus vehicula quis eu ex.</li>
          <li>Proin ultricies turpis et volutpat vehicula.</li>
        </ul>

        <!-- Inline text elements-->
        <h3>Inline text elements</h3>
        <p><a href="#" onclick="event.preventDefault()">Link</a></p>
        <p><strong>Bold</strong></p>
        <p><em>Italic</em></p>
        <p><u>Underline</u></p>
        <p><del>Deleted</del></p>
        <p><ins>Inserted</ins></p>
        <p><s>Strikethrough</s></p>
        <p><small>Small </small></p>
        <p>Text <sub>Sub</sub></p>
        <p>Text <sup>Sup</sup></p>
        <p>
          <abbr title="Abbreviation" data-tooltip="Abbreviation">Abbr.</abbr>
        </p>
        <p><kbd>Kbd</kbd></p>
        <p><mark>Highlighted</mark></p>

        <!-- Headings-->
        <h3>Heading 3</h3>
        <p>
          Integer bibendum malesuada libero vel eleifend. Fusce iaculis turpis
          ipsum, at efficitur sem scelerisque vel. Aliquam auctor diam ut
          purus cursus fringilla. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos.
        </p>
        <h4>Heading 4</h4>
        <p>
          Cras fermentum velit vitae auctor aliquet. Nunc non congue urna, at
          blandit nibh. Donec ac fermentum felis. Vivamus tincidunt arcu ut
          lacus hendrerit, eget mattis dui finibus.
        </p>
        <h5>Heading 5</h5>
        <p>
          Donec nec egestas nulla. Sed varius placerat felis eu suscipit.
          Mauris maximus ante in consequat luctus. Morbi euismod sagittis
          efficitur. Aenean non eros orci. Vivamus ut diam sem.
        </p>
        <h6>Heading 6</h6>
        <p>
          Ut sed quam non mauris placerat consequat vitae id risus. Vestibulum
          tincidunt nulla ut tortor posuere, vitae malesuada tortor molestie.
          Sed nec interdum dolor. Vestibulum id auctor nisi, a efficitur sem.
          Aliquam sollicitudin efficitur turpis, sollicitudin hendrerit ligula
          semper id. Nunc risus felis, egestas eu tristique eget, convallis in
          velit.
        </p>
      </section>
      <!-- ./ Typography-->

      <!-- Form elements-->
      <section id="form">
        <div>
          <form>
            <h2>Input Types</h2>
            <small>Basic Input types</small>
            <div>
              <label>Text</label>
              <input type="text" placeholder="Your name" value="" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Your email" value="" />
            </div>

            <div>
              <label>Phonenumber</label>
              <input type="tel" placeholder="Your phonenumber" value="" />
            </div>

            <div>
              <label>Url</label>
              <input type="url" placeholder="www.google.com" value="" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Your password" />
            </div>

            <div>
              <label>Search</label>
              <input type="search" placeholder="Search all the things" value="" />
            </div>

            <div>
              <label>Disabled field</label>
              <input type="text" disabled placeholder="Your name" value="" />
            </div>
          </form>
          <br />

          <form>
            <h2>Checkbox and Radio</h2>
            <fieldset>
              <div>
                <input type="radio" name="radio" id="r-1" />
                <label for="r-1">Radio button with label</label>
              </div>

              <div>
                <input type="radio" name="radio" id="r-2" />
                <label for="r-2">
                  Radio button with label
                  <small>Radio can have additional information</small>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <div>
                <input type="checkbox" id="check-1" />
                <label for="check-1">Checkbox with label</label>
              </div>

              <div>
                <input type="checkbox" id="check-2" />
                <label for="check-2">
                  Checkbox with label
                  <small>I am additional information regarding this field</small>
                </label>
              </div>
            </fieldset>

            <fieldset>
              <div class="toggle-switch">
                <input type="checkbox" id="toggle" class="toggle" />
                <label for="toggle"></label>
                <span>Toggle Switch </span>
              </div>

              <div class="toggle-switch">
                <input type="checkbox" id="toggle" class="toggle" />
                <label for="toggle"></label>
                <span>Toggle Switch <br /><small>I am additional information regarding this field</small></span>
              </div>
            </fieldset>
          </form>
          <br />
          <form>
            <h2>Fieldset</h2>
            <fieldset>
              <legend>Select your favorite framework</legend>
              <div>
                <input type="radio" name="radio" id="react" />
                <label for="react">React</label>
              </div>

              <div>
                <input type="radio" name="radio" id="vue" />
                <label for="vue">Vue</label>
              </div>

              <div>
                <input type="radio" name="radio" id="angular" />
                <label for="angular">Angular</label>
              </div>
            </fieldset>

            <fieldset>
              <legend>Select your favorite languages</legend>
              <div>
                <input type="checkbox" id="css" />
                <label for="css">CSS</label>
              </div>

              <div>
                <input type="checkbox" id="html" />
                <label for="html">HTML</label>
              </div>

              <div>
                <input type="checkbox" id="js" />
                <label for="js">Javascript</label>
              </div>
            </fieldset>
          </form>
          <br />
          <form>
            <h2>Input Types with Icons</h2>
            <div>
              <label>Phonenumber</label>
              <input type="tel" placeholder="Your phonenumber" value="" class="icon-left" />
            </div>

            <div>
              <label>Url</label>
              <input type="url" placeholder="www.google.com" value="" class="icon-left" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Your email" value="" class="icon-right" />
            </div>

            <div>
              <label>Password</label>
              <input type="password" placeholder="Your password" class="icon-right" />
            </div>
          </form>
          <br />
          <form>
            <h2>Input Fields with validation</h2>
            <div>
              <label>Email</label>
              <input type="email" placeholder="Your email" value="this is not a email adress" required />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="Your email" value="n.voogt@gmail.com" required />
            </div>
          </form>
          <br />
          <form>
            <div>
              <label>Month</label>
              <input type="month" value="2018-05" />
            </div>

            <div>
              <label>Week</label>
              <input type="week" value="2017-W01" />
            </div>

            <div>
              <label>Date</label>
              <input type="date" value="2018-07-22" />
            </div>

            <div>
              <label>Time</label>
              <input type="time" value="13:30" />
            </div>
          </form>
          <br />
          <form>
            <div>
              <label>Textarea</label>
              <textarea rows="5" value=""></textarea>
            </div>

            <div>
              <label>Select</label>
              <select>
                <option>Please select a value</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>

            <div>
              <label>File upload</label>
              <input type="file" />
            </div>

            <div>
              <label>Range slider</label>
              <input type="range" min="0" max="15" />
            </div>

            <div>
              <label>Number</label>
              <input type="number" placeholder="1234" />
            </div>

            <div>
              <label>Color</label>
              <input type="color" />
            </div>
          </form>
          <br />
        </div>
      </section>
      <!-- ./ Form elements-->
      <section>
        <h2>Buttons</h2>
        <div class="container">
          <a class="button">Anchor</a>
          <button class="button">Button</button>
          <input class="button" type="submit" value="Submit input" />
          <input class="button" type="reset" value="Reset input" />
          <!-- 1. Basic Button -->
          <button class="basic-btn">Basic Button</button>
          <br />

          <!-- 2. Outlined Button -->
          <button class="outlined-btn">Outlined Button</button>

          <!-- 3. Rounded Button -->
          <button class="rounded-btn">Rounded Button</button>

          <!-- 4. Square Button -->
          <button class="square-btn">Square Button</button>

          <!-- 5. Gradient Button -->
          <button class="gradient-btn">Gradient Button</button>

          <!-- 6. Text Button -->
          <button class="text-btn">Text Button</button>

          <!-- 7. Icon Button -->
          <button class="icon-btn">
            <box-icon name="universal-access"></box-icon>
          </button>

          <!-- 8. Primary Button -->
          <button class="primary-btn">Primary Button</button>

          <!-- 9. Secondary Button -->
          <button class="secondary-btn">Secondary Button</button>

          <!-- 10. Success Button -->
          <button class="success-btn">Success Button</button>

          <!-- 11. Danger Button -->
          <button class="danger-btn">Danger Button</button>

          <!-- 12. Warning Button -->
          <button class="warning-btn">Warning Button</button>

          <!-- 13. Info Button -->
          <button class="info-btn">Info Button</button>

          <!-- 14. Light Button -->
          <button class="light-btn">Light Button</button>

          <!-- 15. Dark Button -->
          <button class="dark-btn">Dark Button</button>

          <!-- 16. Large Button -->
          <button class="large-btn">Large Button</button>

          <!-- 17. Small Button -->
          <button class="small-btn">Small Button</button>

          <!-- 18. Block Button -->
          <button class="block-btn">Block Button</button>

          <!-- 19. Link Button -->
          <button class="link-btn">Link Button</button>

          <!-- 20. Disabled Button -->
          <button class="disabled-btn" disabled>Disabled Button</button>

          <!-- 21. Loading Button -->
          <button class="loading-btn">
            <i class="ri-loader-2-line"></i><span>Loading Button</span>
          </button>

          <!-- 23. Social Media Button -->
          <button class="social-btn facebook-btn">
            <i class="ri-apple-fill"></i>
          </button>
          <button class="social-btn twitter-btn">
            <i class="ri-twitter-fill"></i>
          </button>
          <!-- Add similar buttons for other social media platforms -->

          <!-- 24. Transparent Button -->
          <button class="transparent-btn">Transparent Button</button>

          <!-- 25. Floating Action Button (FAB) -->
          <button class="fab-btn"><i class="ri-add-large-line"></i></button>

          <!-- 26. Pill Button -->
          <button class="pill-btn">Pill Button</button>

          <!-- 27. Dropdown Button -->
          <label class="dropdown-btn">
            <div class="dd-button">Dropdown</div>

            <input type="checkbox" class="dd-input" id="test" />

            <ul class="dd-menu">
              <li>Action</li>
              <li>Another action</li>
              <li>Something else here</li>
              <li class="divider"></li>
              <li>
                <a href="#">Link to Pari.css</a>
              </li>
            </ul>
          </label>

          <!-- 28. Tabs Button -->
          <button class="tabs-btn">Tabs Button</button>

          <!-- 29. Slider Button -->
          <button class="slider-btn">Slider Button</button>

          <!-- 30. Badge Button -->
          <button class="badge-btn">
            Badge Button <span class="badge">9</span>
          </button>
        </div>
      </section>

      <!-- Accordions -->
      <section id="accordions">
        <h2>Accordions</h2>
        <details>
          <summary>Accordion 1</summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque urna diam, tincidunt nec porta sed, auctor id velit.
            Etiam venenatis nisl ut orci consequat, vitae tempus quam commodo.
            Nulla non mauris ipsum. Aliquam eu posuere orci. Nulla convallis
            lectus rutrum quam hendrerit, in facilisis elit sollicitudin.
            Mauris pulvinar pulvinar mi, dictum tristique elit auctor quis.
            Maecenas ac ipsum ultrices, porta turpis sit amet, congue turpis.
          </p>
        </details>
        <details open="">
          <summary>Accordion 2</summary>
          <ul>
            <li>Vestibulum id elit quis massa interdum sodales.</li>
            <li>Nunc quis eros vel odio pretium tincidunt nec quis neque.</li>
            <li>Quisque sed eros non eros ornare elementum.</li>
            <li>Cras sed libero aliquet, porta dolor quis, dapibus ipsum.</li>
          </ul>
        </details>
      </section>
      <!-- ./ Accordions -->

      <!-- Article-->
      <article id="article">
        <h2>Article</h2>
        <p>
          Nullam dui arcu, malesuada et sodales eu, efficitur vitae dolor. Sed
          ultricies dolor non ante vulputate hendrerit. Vivamus sit amet
          suscipit sapien. Nulla iaculis eros a elit pharetra egestas. Nunc
          placerat facilisis cursus. Sed vestibulum metus eget dolor pharetra
          rutrum.
        </p>
        <footer>
          <small>Duis nec elit placerat, suscipit nibh quis, finibus neque.</small>
        </footer>
      </article>
      <!-- ./ Article-->
    </main>
    <!-- ./ Main -->

    <!-- Footer -->
    <footer>
      <small>Built with <a href="#">Pari</a> • <a href="#">Source code</a></small>
    </footer>
  </div>
  <!-- ./ Footer -->

  <!-- Dropdown -->
  <details class="dropdown">
    <summary>Dropdown</summary>
    <ul>
      <li><a href="#">Solid</a></li>
      <li><a href="#">Liquid</a></li>
      <li><a href="#">Gas</a></li>
      <li><a href="#">Plasma</a></li>
    </ul>
  </details>

  navbar--

  <nav>
      <header>
        <h2>pari.css</h2>
      </header>
      <input type="checkbox" id="nav-check" />
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
        <li>
          <details class="dropdown">
            <summary>Account</summary>
            <ul role="nav-drop">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li><a href="#">Security</a></li>
              <li><a href="#">Logout</a></li>
            </ul>
          </details>
        </li>
        <li><button class="primary-btn">Get Started</button></li>
      </ul>
    </nav>

    sidebar--

    <aside>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Clients</a></li>
          <li><a href="#">Career</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Downloads</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Community</a></li>
          <li><a href="#">Documentation</a></li>
        </ul>
      </nav>
    </aside>

    tabs--

    <nav role="tabs">
      <ul>
        <li class="active-tab"><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Products</a></li>
      </ul>
    </nav>

`;

const puppeteer = require("puppeteer");

class pari {
  constructor(url, options) {}

  static async initialize() {}

  async pariCss(params) {
    const { pre, msec } = params;

    try {
      const browser = await puppeteer.launch({ headless: false });
      const page = await browser.newPage();

      const searchUrl = `https://chat.openai.com/`;
      await page.goto(searchUrl, { waitUntil: "networkidle0", timeout: 30000 });

      const finalData = pre + PariData ;
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
      const data = await this.pariCss(params);
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

module.exports = pari;
