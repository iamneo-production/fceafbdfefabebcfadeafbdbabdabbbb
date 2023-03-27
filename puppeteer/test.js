
const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('h1');
    const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#table-heading");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase1:success');
  }
  catch(e){
    console.log('TESTCASE:testcase1:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('table');
    const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#courseTable");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase2:success');
  }
  catch(e){
    console.log('TESTCASE:testcase2:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('ul');
    await page.waitForSelector('h2');
    const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#courseHeading");
        return heading.innerHTML;
      })
    const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#courseList");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase3:success');
  }
  catch(e){
    console.log('TESTCASE:testcase3:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

// -----------------------------------------------------------------------------------------------------------

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('iframe');
    const result1 = await page.evaluate(()=>{
        let heading = document.querySelector("#frameHeading");
        return heading.innerHTML;
      })
      
    const result2 = await page.evaluate(()=>{
        let heading = document.querySelector("#frameImage1");
        return heading.innerHTML;
      })
    const result3 = await page.evaluate(()=>{
        let heading = document.querySelector("#frameImage2");
        return heading.innerHTML;
      })
    console.log('TESTCASE:testcase4:success');
  }
  catch(e){
    console.log('TESTCASE:testcase4:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();

// ----------------------------------------------------------------------------------------------------

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('form');
      const result2 = await page.evaluate(()=>{
          let form = document.querySelector("#login-form");
          return form.innerHTML;
        })
    
    console.log('TESTCASE:testcase5:success');
  }
  catch(e){
    console.log('TESTCASE:testcase5:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try{
    await page.goto('https://8081-fceafbdfefabebcfadeafbdbabdabbbb.project.examly.io/');
    await page.setViewport({
      width:1200,
      height:800,
    })
    await page.waitForSelector('label');
      await page.waitForSelector('input');
      await page.waitForSelector('button');
      const result3 = await page.evaluate(()=>{
        let button = document.querySelector("#submit_btn");
        return button.innerHTML;
      })
    
    console.log('TESTCASE:testcase6:success');
  }
  catch(e){
    console.log('TESTCASE:testcase6:failure');
  }finally{
    await page.close();
    await browser.close();
  }
})();