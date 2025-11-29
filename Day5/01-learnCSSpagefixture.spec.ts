import { chromium, test } from "@playwright/test";

test(`Test to learn CSS Selectors`, async ({ page }) => { // page fixture

  /*  const browser1 = await chromium.launch({ channel: "msedge" });
   const context1 = await browser1.newContext();//Stage 2 creating am isolated environment named as context
   const page1 = await context1.newPage(); //Stage 3 creating a page instance to load  a URL */

  await page.goto(`http://leaftaps.com/opentaps/control/main`)

  // await page.locator(`#username`).fill(`democsr`);

  // await page.locator(`input`).nth(0).fill(`demosalesmanager`); // nth method

  await page.locator(`input`).first().fill(`demosalesmanager`);

  //  await page.locator(`#password`).fill(`crmsfa`);

  await page.locator(`input`).nth(1).fill(`crmsfa`);

  //  await page.locator(`.decorativeSubmit`).click();

  //   await page.locator(`input`).nth(2).click();

  await page.locator(`input`).last().click();



  await page.waitForTimeout(3000)
})