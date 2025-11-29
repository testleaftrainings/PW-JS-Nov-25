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



 await page.locator(`//input[@class="smallSubmit"]`).click()

})