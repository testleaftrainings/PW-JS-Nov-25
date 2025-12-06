"use strict";
//type alias has two types
//Union type
//Intersection type 
Object.defineProperty(exports, "__esModule", { value: true });
var username; // union
username = "ravi@testleaf.com";
username = 9890809;
//Here the productDataType is an alias name to handle 3 different datatypes
var accountNumber = 45634;
accountNumber = "#1232345423";
accountNumber = true;
function invokeBrowsers(browserName) {
    if (browserName === "Chrome") {
        console.log("Launch Chrome");
    }
    else {
        console.log("Firefox Browser");
    }
}
invokeBrowsers("Firefox");
var userProfile = {
    adminName: "Testleaf",
    privileges: ['server'],
    name: "Ravindran",
    empId: 1001,
    date: "06/12/25"
};
console.log(userProfile.adminName);
console.log(userProfile.privileges);
