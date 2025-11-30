import { expect, test } from "@playwright/test";

test(`Test to learn Xpath locators Selectors`, async ({ page }) => { // page fixture
  //  test.setTimeout(20000)

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await expect(page.locator(`//input[@id="username"]`)).toBeVisible(); // Locator based assertion 

    await page.locator(`//input[@id="username"]`).fill(`demosalesmanager`);

    await page.locator(`//input[@id="password"]`).fill(`crmsfa`);

//    await expect(page.locator(`//input[@class="decorativeSubmit"]`)).toBeDisabled({timeout:15000})// assertion timeout

    await page.locator(`//input[@class="decorativeSubmit"]`).click({timeout:15000}); // action timeout

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

    await page.selectOption(`//select[@id="createLeadForm_dataSourceId"]`, { index: 3 })

    const dropdown = page.locator(`#createLeadForm_dataSourceId>option`) // --> holding 13 webelements/ locator objects

    const dropdownCount = await dropdown.count() // Print 13 number

    expect(dropdownCount).toBeGreaterThan(1) // Generic assertion (non-retry)

    console.log(`No. of values in the dropdown ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {

        console.log(await dropdown.nth(index).innerText());

    }

    /*  console.log(await dropdown.nth(0).innerText());
      console.log(await dropdown.nth(1).innerText());
       console.log(await dropdown.nth(2).innerText()); */

    await page.locator(`//input[@class="smallSubmit"]`).click()
    // await page.waitForLoadState("domcontentloaded")

    const statusLocator = page.locator(`#viewLead_statusId_sp`) // locator value assigned

    await expect(statusLocator).toContainText("Assigned") // Locator based assertion it is validation the value through the locator// auto retry 

    const statusText = await statusLocator.innerText() 

    console.log(`The status is ${statusText}`);

    expect(statusText).toContain("Assigned") // Generic asertion it is validating the value directly//non retry
    

})