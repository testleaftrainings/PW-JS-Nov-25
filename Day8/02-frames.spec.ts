import { test } from "@playwright/test";

test(`Learn frames`,async ({page}) => {
    
    await page.goto(`https://leafground.com/frame.xhtml`);

    const allframes = page.frames()
    //console.log(allframes);

    const frameCount = allframes.length
    console.log(`Total count of frames in the page is ${frameCount}`);

    // for (let index = 0; index < frameCount ; index++) {
        
    //     const title = await allframes[index].title();        // await allframe[0] --> first main webpage,
    //     console.log(`The title of the frames are ${title}`); // await allframe[1] --> firstframe inside the DOM  main webpage,
        
    // }    

    for(let tempVal of allframes){
        const title= await tempVal.title()
        console.log(`The title of the frames are ${title}`);
        
    }



  //  await page.title()


    


    
})