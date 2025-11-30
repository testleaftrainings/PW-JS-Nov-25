import { test } from "@playwright/test";

test(`Test to learn Xpath locators Selectors`,async ({page}) => { // page fixture

   await page.goto(`http://leaftaps.com/opentaps/control/main`);

  await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`); 

  await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

  await page.locator(`//input[@class="decorativeSubmit"]`).click();

  await page.locator(`//a[contains(text(),"CRM")]`).click()

 await page.waitForTimeout(3000)

 await page.locator(`//a[text()="Create Lead"]`).click()

 await page.locator(`//input[@id="createLeadForm_companyName"]`).fill("Testleaf")

 await page.locator(`//input[@id="createLeadForm_firstName"]`).fill("Ravindran");

 await page.locator(`//input[@id="createLeadForm_lastName"]`).fill("R")

// await page.selectOption("#createLeadForm_dataSourceId",{value:"LEAD_DIRECTMAIL"}) 
 // selectOPtion("Identify the drop webelement present in DOM", choose one of the dropdown valur using "VAlue", "label",index)

 //await page.selectOption("#createLeadForm_dataSourceId",{label:"LEAD_DIRECTMAIL"})

 //await page.selectOption("#createLeadForm_dataSourceId",{label:"Direct Mail"})

 await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`,{index:3})

 const dropdown = page.locator(`#createLeadForm_dataSourceId>option`) // --> holding 13 webelements/ locator objects

 const dropdownCount = await dropdown.count() // Print 13 number

 console.log(`No. of values in the dropdown ${dropdownCount}`);

 for (let index = 0; index < dropdownCount; index++) {

console.log(await dropdown.nth(index).innerText());
   
 }

/*  console.log(await dropdown.nth(0).innerText());
  console.log(await dropdown.nth(1).innerText());
   console.log(await dropdown.nth(2).innerText()); */
 

 



 await page.locator(`//input[@class="smallSubmit"]`).click()

})