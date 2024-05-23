const puppeteer = require('puppeteer');

const url='https://www.youtube.com/watch?v=ssRo5nVOvrQ&ab_channel=typecraft';

const main= async ()=>{
    const br=await puppeteer.launch();
    const pg=await br.newPage();
    await pg.goto(url);
    await pg.screenshot({path:'C://Users//Ramkrishna//Desktop//dom//events//screenshotk.png'});
    br.close();
}