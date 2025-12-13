import { test } from "@playwright/test";
import path from "path";

test(`File Download`,async ({page}) => {
    
    await page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent("download") // listener to capture download

    await page.getByText(`Download`,{exact:true}).click(); // 

    const fDown = await filePromise

    //Option1

    // await fDown.saveAs("Data/NovPW.png");

    // await fDown.saveAs(`Data/${fDown.suggestedFilename()}`) // suggested file === actual file name

    //Option2

    //Downloading the file to Data folder using absolute path 

   // await fDown.saveAs(path.join(__dirname,`../../Data/Absolute.png`))

 //  await fDown.saveAs(path.join(__dirname,`../../Data`,fDown.suggestedFilename()))


    //Option 3 : Download to D drive of system.

    await fDown.saveAs("D:\\NovPWDownloaded.png");

    await page.waitForTimeout(3000)




})