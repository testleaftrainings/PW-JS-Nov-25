/* Datatypes:

1. number
2. string
3. boolean
4. undefined
5. null
6. any
7. unknown
8. never
9. tuple*/

let companyName : string = "Testleaf"

//any datatype :
//When you are not sure of the datatype that the variable is going to hold and inorder avoid compilation error

let data : any = "345234" //any datatype is not strict at all. while using any typescript behaves similar to that of JavaScript
data = true
data = "This is any datatype"
data.toUpperCase()

let value : unknown;  // unknown datatype it is mildly strict where it can accept all datatypes and can further be manipulated using an if confition
value = "Hello"
value = 40;


if( typeof value === "string" ){ // check / verify the datatype and then use it.
console.log(value.toUpperCase());
}

//never datatype :

function infiniteLoop():never{
while(true){
    console.log("This is an infinite loop");    
}

}


//tuple : is homogenous array

// let user : [string,number,boolean]= ["Testleaf",20,true]
// console.log(user[1]); // 20
