//Numeric enum
var TestResults;
(function (TestResults) {
    TestResults[TestResults["Pass"] = 0] = "Pass";
    TestResults[TestResults["Fail"] = 1] = "Fail";
    TestResults[TestResults["Skip"] = 2] = "Skip";
})(TestResults || (TestResults = {}));
function logTestResult(result) {
    console.log("Test result : ".concat(result));
}
logTestResult(TestResults.Pass);
// logTestResult(TestResults.Fail)
// logTestResult(TestResults.Skip)
//String enum
var BrowserType;
(function (BrowserType) {
    BrowserType["Chrome"] = "Chrome";
    BrowserType["Firefox"] = "Firefox";
    BrowserType["Edge"] = "msedge";
})(BrowserType || (BrowserType = {}));
function launchBrowser(browserEngine) {
    console.log("Launch browser using ".concat(browserEngine));
}
launchBrowser(BrowserType.Chrome);
//Heterogenous enum
var BrowserStatus;
(function (BrowserStatus) {
    BrowserStatus[BrowserStatus["OPen"] = 0] = "OPen";
    BrowserStatus[BrowserStatus["Incognito"] = 1] = "Incognito";
    BrowserStatus["Crash"] = "crashed";
    BrowserStatus[BrowserStatus["Close"] = 5] = "Close";
    BrowserStatus[BrowserStatus["Freeze"] = 6] = "Freeze";
})(BrowserStatus || (BrowserStatus = {}));
function reportBrowserStatus(status) {
    console.log("Current status of browser is ".concat(status));
}
reportBrowserStatus(BrowserStatus.OPen);
reportBrowserStatus(BrowserStatus.Crash);
reportBrowserStatus(BrowserStatus.Freeze);
