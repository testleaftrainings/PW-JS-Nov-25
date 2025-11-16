
// function getBrowser(browserName) { // Function declaration passing a parameter

//     if (browserName === "chrome") {
//         console.log("Supported browser is chrome");
//     } else if (browserName==="edge") {
//          console.log("Supported browser is edge");
//     } else {
//         console.log("Not a supported browser");        
//     } 
// }

// getBrowser("firefox")


function getVersion() {

    switch (browser) {
        case "Chrome":
            console.log("131");
            break;

        case "edge":
            console.log("132");
            break;

        case "firefox":
            console.log("134");
            break;

        default:
            console.log("Unsupported browser");
            
            break;
    }
}

let browser="firefox"
getVersion()







