//Typeassertions


//using angular bracket

let firstName : string = "Ravindran" // hard coding the data

let response : any // data that comes from external source

let myResposne =  <string> response
console.log(myResposne.length);


/* TypeAssertion,
You chnage the label (":This is a string") but the content remains same

Here the compiler assumes it's a string, so you won't get a compilation error while using string property .length*/

//using as keyword


let sCode : any = "Success"

let statusLength = sCode as string
console.log(statusLength.length);











//using as keyword