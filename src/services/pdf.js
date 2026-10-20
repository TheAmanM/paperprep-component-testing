// import {get} from 'http' ;
// import { get } from 'http';
// import {} from 'axios';
// import axios from 'axios';
// import { fetch } from 'fetch';
// const fetch = require('fetch');

/* const test = async (url) => {
    // axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    const options = {
        method: 'GET',
        mode: 'no-cors',
        'Content-Type': 'text/pdf'
    };

    /* axios.get(url, options, (res) => {
        var data = [];

        res.on('data', function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            //at this point data is an array of Buffers
            //so Buffer.concat() can make us a new Buffer
            //of all of them together
            var buffer = Buffer.concat(data);
            console.log(buffer.toString('base64'));
        });
    }); */

// fetch(url, options).then((res) => {
// var data = [];

/* res.on('data', function (chunk) {
    data.push(chunk);
}).on('end', function () {
    //at this point data is an array of Buffers
    //so Buffer.concat() can make us a new Buffer
    //of all of them together
    var buffer = Buffer.concat(data);
    console.log(buffer.toString('base64'));
}); */
// console.log(res.type);

// }).catch((e) => {
//     console.log(`Error: ${e}`);
// })
// };

// export default test

import puppeteer from "puppeteer";

/* const vgmUrl = 'https://www.vgmusic.com/music/console/nintendo/nes';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(vgmUrl);

  const links = await page.$$eval('a', elements => elements.filter(element => {
    const parensRegex = /^((?!\().)*$/;
    return element.href.includes('.mid') && parensRegex.test(element.textContent);
  }).map(element => element.href));

  links.forEach(link => console.log(link));

  await browser.close();
})(); */

export const fetch = async (url) => {
  console.log("Running function");
  const browser = puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = browser.newPage();
  await page.goto(url, { waitUntil: "network2dle2" });
  await page.pdf({ path: "file.pdf", format: "A4" });
  console.log("Function call completed!");
};
