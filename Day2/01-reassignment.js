//Charcteristics / Behaviour of var, let and constat the time of redeclaration , reassignment


//var redeclaration:

var username = "hello@testleaf.com" // declaration
var username ="helloteam@testleaf.com"//redeclaration
console.log(username);

//var reassignment:

// var password = "Testleaf#1234"//declaration and assigning a value
// password ="Testleaf@123"
// console.log(password);


//let redeclaration not possible

/* let accountBalance = 456754
let accountBalance=6789  */// redeclaration gives syntax error and will not allow you to execute the code

//let reassignment can be done
// let accountBalance = 456754
//  accountBalance=6789 
//  console.log(accountBalance);
 

 //const redeclaration is not allowed

/* const accountNumber = 878978789
const accountNumber=6789 */ // redeclaration gives syntax error and will not allow you to execute the code

//const reassignment
const accountNumber = 878978789 // reclaration
 accountNumber=6789  // value reassigned


 //Initialization :

// var x // declaration without initilization possible in var
// let y // declaration without initilization possible in let
// const z // declaration without initilization is not possible in const




