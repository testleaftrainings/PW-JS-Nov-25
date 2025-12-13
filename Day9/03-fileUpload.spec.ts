import { test } from "@playwright/test";
import path from "path";

//Scenario 1(a) : While we have type=file as attribute name and value

test(`File Upload with type="file" in the DOM as webelement`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type="file"])[1]`);

    //  await uploadFile.setInputFiles("Data/learningFileUpload.txt");

    await uploadFile.setInputFiles(path.join(__dirname, '../../Data/learningFileUpload.txt')); // Fileupload using absolute path

    await page.waitForTimeout(3000)

})

//Scenario 1(b) : While we have type=file as attribute name and value for multiple fil upload

test(`File Upload with type="file" in the DOM as webelement for Mutiple Upload`, async ({ page }) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const multipleFile = page.locator(`(//input[@type="file"])[2]`);

    await multipleFile.setInputFiles(["Data/qeagle-logo.png", "Data/TestLeaf Logo.png"])

    //Mutiple uploads using Absolute path 

    await page.waitForTimeout(3000)

})

//Scenario 2 : While we don't have type=file as attribute namd and value

test(`File Upload without type="file" in the DOM`, async ({ page }) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser"); //Used to get the file and upload it into the application after the click() trigger has happened

    await page.locator(`//div[@id="drag-drop-upload"]`).click()

    const fileUpload = await filePromise

    await fileUpload.setFiles("Data/TestLeaf Logo.png")

    await page.waitForTimeout(3000)
})

/* ********************************************************************************************* */
//Classroom Acitvity : Upload Mutiple files using absolute path :

test.only(`Fileupload with type=file in the DOM as webelement and upload multiple files`, async ({ page }) => {
    await page.goto(`https://leafground.com/file.xhtml`);

    const MultipleFile = page.locator(`(//input[@type="file"])[2]`);

    //Uploading file from Data folder using absolute path
    const filePath1 = path.join(__dirname, "../../Data/TestLeaf Logo.png");
    const filePath2 = path.join(__dirname, "../../Data/qeagle-logo.png");

    await MultipleFile.setInputFiles([filePath1, filePath2]);

    await page.waitForTimeout(5000);
});