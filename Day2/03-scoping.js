//Scoping in JS

//var scoping in block

//var companyName = "Testleaf" // global declaration

// if (true) {
//    var companyName = "Testleaf" // global declaration 
//    console.log("Accessing var inside the if block",companyName);  
// }

//  console.log("Accessing var outside the if block",companyName); //value declared with var is accessible outside the block

 //let block scoping

// if (true) {
//    let companyName = "Testleaf" 
//    console.log("Accessing let inside the if block",companyName);  
// }

//  console.log("Accessing let outside the if block",companyName); //value declared with let is not accessible outside the block


 //const block scoping

// if (true) {
//    const companyName = "Testleaf" 
//    console.log("Accessing let inside the if block",companyName);  
// }

//  console.log("Accessing let outside the if block",companyName); //value declared with const is not accessible outside the block


 //Introduce function block to know the behaviour of var, let and const

//  //var is function scoped

//  function greet(){

//     var message = "Hello Team"
//     console.log("Accessing var inside the function block",message);

//     if(true){
//         console.log("Accessing var inside the if block",message);
        
//     }
    
//  }
// console.log("Accessing var outside the function",message);

//  greet()

 //let is block scoped

 function greet(){

    let message = "Hello Team"
    console.log("Accessing let inside the function block",message);

    if(true){
        console.log("Accessing let inside the if block",message);
        
    }
    
 }
console.log("Accessing let outside the function",message);

 greet()