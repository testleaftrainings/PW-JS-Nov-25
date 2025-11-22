/* String Decalaration

1. String Literal.
2. Object Literal*/

//String Literal :

let companyName = "Testleaf" 
let firmName = "Testleaf"

console.log(companyName===firmName);//true

//Object Literal :

let companyNameNew = new String("Testleaf")
let firmNameNew = new String("Testleaf")

console.log(companyNameNew===firmNameNew);//false

//String methods :

//Escape sequence : \,\n,\t
let testEsc = 'It\'s a regression testing'
console.log(testEsc);

let testEscDbl = "Hello\t this is \"double quote\""
console.log(testEscDbl);

//concatenation -- concat()
//+

let testCase = "Create a new lead"
let testCaseId = "123"

/* let resultConcat = testCaseId.concat(testCase)//123Create a new lead
console.log(resultConcat); */

//let resultConcat = testCaseId.toString.concat(testCase)//123Create a new lead
//console.log(resultConcat);

//+

let resultplus = testCaseId+"-"+testCase+" passed in the execution"
console.log(resultplus);


//Template literal --> `${}`

function funName(Tcases){
   // Tcases = 300
    let output = `Theres are ${Tcases} testcases`
    console.log(output);    
}

funName("120")


//length - property
//Counting the string by the number of characters in side a string

let course = "Playwright"
console.log(`The length of the string is ${course.length}`);

//charAt()
console.log(`The charAt of 2 of the string is ${course.charAt(2)} `);

//indexOf()

console.log(`The indexOf "a" ${course.indexOf('a')}`);

//slice()

let outputSlice1 = course.slice(2,4) // slice(startIndex, endIndex)
console.log(outputSlice1);//ay

//let outputSlice2 = course.slice(-4,-2) //ig // slice(startIndex, endIndex)
let outputSlice2 = course.slice(-2,-4) //space// Cannot swap your start and end index 
console.log(outputSlice2);//

let outputSlice3 = course.slice(5) // 
console.log(outputSlice3);//right // end index is taken as 0


/* Summary on slice :
1. start index included and end index is optional
2. negtive index is allowed and the counr starts from -1
3. cannot swap and first indes should be lesser than the last index  */


//substring()

let outputSubstring1 = course.substring(2,4) //ay
console.log(outputSubstring1);

let outputSubstring2 = course.substring(4,2) //ay
console.log(outputSubstring2);

let outputSubstring3 = course.substring(-4,-2) //blank space
console.log(outputSubstring3);

let outputSubstring4 = course.substring(5,-2) // -2 Equivalent to 0 blank space
console.log(outputSubstring4);

let outputSubstring5 = course.substring(5) //Playwright //substring(-5) is equivalent to substring()
console.log(outputSubstring5);

//String reversal 

let company = "Testleaf"

//Output ="faeltseT"

function reverseString(){

/*     let reverseShort = company.split("").reverse().join("")
    console.log(reverseShort); */
    
    let chars = company.split("");
    console.log(chars)

    let reverse=""

    for (let index = chars.length-1; index >=0; index--){

        reverse = reverse+chars[index]              
    }

     if(company===reverse){
            console.log("Palindrome");
            
        }else{
            console.log("Not a plaindrome");
            
        }
     
    return reverse

    
}

console.log(reverseString());












