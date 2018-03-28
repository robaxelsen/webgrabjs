const puppeteer = require('puppeteer');
const domain = require('getdomain');
const args = process.argv;

const dimensions = args[3].split('x');
const width = parseInt(dimensions[0]) ? parseInt(dimensions[0]) : 1920;
const height = parseInt(dimensions[1]) ? parseInt(dimensions[1]) : 1080;

const url = args[2];
const currentDate = new Date().toISOString().replace(/T/, '_').replace(/\..+/, '').replace(/:/g, '-');
const filepath = `screenshots/${domain.get(url)}_${currentDate}.png`;

(async () => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();
  page.setViewport({ width: width, height: height });

  await page.goto(url);
  await page.screenshot({path: filepath});

  await browser.close();
})();
