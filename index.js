const core = require("@actions/core");
const puppeteer = require('puppeteer');
const exec = require('child_process').exec;
const path = require('path');
const fs = require('fs');
const {execSync} = require('child_process');

const url = core.getInput('url', {required:true});
const screenshot_name = core.getInput('screenshot_name', {required:true});
const authorization_token = core.getInput('authorization_token', {required:false, default:''});

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 const Screenshot = async () => {      
  
    const browser = await puppeteer.launch({headless:true});  
  
    const page = await browser.newPage();
 
    await page.setExtraHTTPHeaders({ Authorization: `Bearer ${authorization_token}` })
  
    await page.goto(url); 
 
    await delay(5000);
  
    await page.screenshot({  
  
     path: `${__dirname}/${screenshot_name}`,    
  
     fullPage: true   
   });
  
   await page.close();         
  
   await browser.close();

   // returns path and screenshot_name
   core.setOutput('path', __dirname);
   core.setOutput('screenshot_name', screenshot_name);
  
 }

 function setupcromium() {

    // Need to ensure TS is compiled before loading the installer
    if (!fs.existsSync(path.join(__dirname, 'lib'))) {
      console.log('It seems we are installing from the git repo.');
      console.log('Building install tools from scratch...');
      execSync('npm run build --workspace puppeteer');
    }
    
    const {downloadBrowser} = require('puppeteer/internal/node/install.js');
    
    downloadBrowser();
 }

 setupcromium();