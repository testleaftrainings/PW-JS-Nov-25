

//Numeric enum

enum TestResults {
Pass,
Fail,
Skip
}
function logTestResult(result:TestResults){
    console.log(`Test result : ${result}`);    
}

logTestResult(TestResults.Pass)
// logTestResult(TestResults.Fail)
// logTestResult(TestResults.Skip)


//String enum

enum BrowserType {

    Chrome="Chrome",
    Firefox="Firefox",
    Edge="msedge"
}

function launchBrowser(browserEngine:BrowserType){    
console.log(`Launch browser using ${browserEngine}`);
}

launchBrowser(BrowserType.Chrome)

//Heterogenous enum

enum BrowserStatus {
    OPen,
    Incognito,
    Crash="crashed",
    Close=4,
    Freeze
}

function reportBrowserStatus(status : BrowserStatus){

console.log(`Current status of browser is ${status}`);


}

reportBrowserStatus(BrowserStatus.OPen)
reportBrowserStatus(BrowserStatus.Crash)
reportBrowserStatus(BrowserStatus.Freeze)