const core = require("@actions/core");
const puppeteer = require('puppeteer');
const exec = require('child_process').exec;
var pathToModule = require.resolve('puppeteer');

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
    console.log(pathToModule)

    exec('cd /home/runner/work/_actions/TIMEmSYSTEM/Screenshot-Taker/master',
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });
 }

 setupcromium();