const core = require("@actions/core");
const puppeteer = require('puppeteer');

const url = core.getInput('url', {required:true});
const screenshot_name = core.getInput('screenshot_name', {required:true});
const authorization_token = core.getInput('authorization_token', {required:false, default:''});

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }

 const Screenshot = async () => {      
    console.log(__dirname);
 }

 Screenshot(); 