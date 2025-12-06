

// let user = {
//     firstName : "Ravindran", // key : value
//     lastName : " R",
//     email:"ravi@testleaf.com"

// }

// console.log(user.firstName); // accessing values inside an object using "dot notation"




// let user : {
//     firstName : string, // key : value
//     lastName : string,
//     email:string
// }={
//     firstName : "Ravindran", // key : value
//     lastName : " R",
//     email:"ravi@testleaf.com"
// }

// console.log(user.firstName);
// console.log(user.email);


let user : {
    "$firstName" : string, // key : value
    lastName : string,
    email:string
}={
    "$firstName" : "Ravindran&*", // key : value
    lastName : " R",
    email:"ravi@testleaf.com"
}

console.log(user["$firstName"]); // square bracket notation 
console.log(user.email);

