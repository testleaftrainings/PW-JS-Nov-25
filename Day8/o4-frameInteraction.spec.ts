import { test } from "@playwright/test";

/* Intehttps://leafground.com/default.xhtml raction of frames using : URl, name, index, frameLocators  */

test(`Interact with frame using URL`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`)

    //URL of first frame: 

    const frameURL = page.frame({ url: "https://leafground.com/default.xhtml" })
    // frameURL is the reference of the frame which has the url :https://leafground.com/default.xhtml 

    await frameURL?.locator("#Click").click()

    await page.waitForTimeout(3000)

    /* if(frame){
    await frame.locator("#Click").click()
}
    else{
        console.log("Frame Not Founnd")}} */
    })


//name :

test(`Interact with frame using Name`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`)

    //Name of frame: 

    const frameName = page.frame({name:"frame2" })
    // frameURL is the reference of the frame which has the url :https://leafground.com/default.xhtml 

    await frameName?.locator("#Click").click()

    await page.waitForTimeout(3000)

    /* if(frame){
    await frame.locator("#Click").click()
}
    else{
        console.log("Frame Not Founnd")}} */

})

//framelocator

test(`Interact with frame using framelocators`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`)

   // page.locator("#Click")

     const frameRef = page.frameLocator(`[src="default.xhtml"]`)

     await frameRef.locator("#Click").click()

     await page.waitForTimeout(3000)
    
})


test.only(`Interact with nested frames`, async ({ page }) => {

    await page.goto(`https://leafground.com/frame.xhtml`)

     const frame_outerframe = page.frameLocator(`[src="page.xhtml"]`);

    const frame_innerframe = frame_outerframe.frameLocator(`[id="frame2"]`)

     await frame_innerframe.locator("#Click").click()

     await frame_outerframe.locator("#Click").click()

     await page.waitForTimeout(3000)
    
})

