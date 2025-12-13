import { test } from "@playwright/test";

test(`Handling tabs using sequential way handling window`, async ({context,page}) => {
    
    await page.goto(`https://www.flipkart.com/`); // Here parent page === page

    const searchBox= page.locator(`//input[@class="Pke_EE"]`);

    await searchBox.fill(`Phones`);

    await searchBox.press("Enter");

    const newPage = context.waitForEvent('page') // Pending // Step 1 : Listener open

    await page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click(); // Click Event // Step 2 : Click action

    const childPage =   await newPage // Step3 : Resolving the promise //The page is captured by this time// Promise is resolved ones playwright has captured the newPage that got launched

    console.log(await page.title());

    console.log(await childPage.title());

    // await page.bringToFront();

    await page.locator(`//span[contains(text(),"Electronics")]`).click();    

    await page.waitForTimeout(3000)
})


test(`Handling tabs using concurrent way handling window`, async ({context,page}) => {
    
    await page.goto(`https://www.flipkart.com/`); // Here parent page === page

    const searchBox= page.locator(`//input[@class="Pke_EE"]`);

    await searchBox.fill(`Phones`);

    await searchBox.press("Enter");

    // const newPage = context.waitForEvent('page') // Pending // Step 1 : Listener open

    // await page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).click(); // Click Event // Step 2 : Click action

    // const childPage =   await newPage // Step3 : Resolving the promise //The page is captured by this time// Promise is resolved ones playwright has captured the newPage that got launched


   // const [childPage] = await Promise.all([context.waitForEvent('page'),page.locator(`//div[text()="POCO C71 (Desert Gold, 64 GB)"]`).click()])
    const [childPage] = await Promise.all([context.waitForEvent('page'),page.locator(`//div[contains(text(),"MOTOROLA g35 5G")]`).first().click()])


    //Array destructuring to get the reference of the child page
    console.log(await page.title());

    console.log(await childPage.title());

     await page.bringToFront();

    await page.locator(`//span[contains(text(),"Electronics")]`).click();

    await childPage.bringToFront();
    
    const price = await childPage.locator(`//div[contains(@class,"bnqy")]`).innerText()

    console.log(price);
    
    await page.waitForTimeout(3000)
})


test.only(`Handling Multiple pages`,async ({page,context}) => {

    await page.goto(`https://leafground.com/window.xhtml`);

   await Promise.all([context.waitForEvent('page'),page.getByText('Open Multiple',{exact:true}).click()])

    const allPages = context.pages();

    console.log(allPages.length);

    console.log(await allPages[0].title());

    //allPage[0] --> refernce of parent page
    //allPage[1] --> Web Table child page 1 
    //allPage[2] --> Dashboard child page 2

     console.log(await allPages[1].title());

      console.log(await allPages[2].title());
    
    

    
})