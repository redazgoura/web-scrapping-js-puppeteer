const puppeteer = require('puppeteer');

async function exec(){

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //we pass th url of the page that we want to go to 
    await page.goto('');

    //to access dom elemnts
    await page.screenshot({ path: 'screenShoot.png', fullPage : false });
    await browser.close();
}
exec();
