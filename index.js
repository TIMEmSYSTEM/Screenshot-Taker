const core = require("@actions/core");
const puppeteer = require('puppeteer');
const { downloadBrowser } = require('puppeteer/internal/node/install.js');
const exec = require('child_process').exec;

const url = core.getInput('url', { required: true, default: "https://google.com" });
const screenshot_name = core.getInput('screenshot_name', { required: true, default: "screenshot.png" });
const authorization_token = core.getInput('authorization_token', { required: false, default: '' });

function delay(time) {
  return new Promise(function (resolve) {
    setTimeout(resolve, time)
  });
}

const Screenshot = async () => {

  downloadBrowser();

  await delay(10000);

  const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  console.log("Browser launched with no sandbox");
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ Authorization: `Bearer ${authorization_token}` })
  await page.goto(url);
  console.log("Page loaded");
  await delay(5000);
  await page.screenshot({
    path: `${__dirname}/${screenshot_name}`,
    fullPage: true
  });
  console.log("Screenshot taken");
  await page.close();
  await browser.close();

  // returns path and screenshot_name
  core.setOutput('path', __dirname);
  core.setOutput('screenshot_name', screenshot_name);
  console.log("Screenshot saved");
}

Screenshot();
