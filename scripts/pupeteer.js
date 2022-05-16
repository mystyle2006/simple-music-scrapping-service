const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const result = {
    publisher: '',
    agency: '',
  };
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://vibe.naver.com/album/7443411', {
    waitUntil: 'networkidle0',
  });
  await page.waitForSelector('#app > div.modal > div > div > a.btn_close');
  await page.click('#app > div.modal > div > div > a.btn_close');
  await page.click(
    '#content > div:nth-child(1) > div.summary_section > div.summary > div.text_area > div.info > div > a',
  );

  const html = await page.content();
  const $ = cheerio.load(html);
  const element = $(
    '#app > div.modal > div > div > div.ly_contents > div > table > tbody',
  );

  result.publisher = element
    .find('tr:nth-of-type(1) td')
    .children()
    .remove()
    .end()
    .text();
  result.agency = element
    .find('tr:nth-of-type(2) td')
    .children()
    .remove()
    .end()
    .text();

  await page.screenshot({ path: 'example.png' });
  await browser.close();

  console.log(result);
})();
