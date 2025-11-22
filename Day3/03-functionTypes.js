//Named Function :

function PWNov25ArgsRe(a,b){ // FUnction definition (parameters)

   /*  let a=10
    let b=20 */
    let c=a+b
    return c    
}

console.log(PWNov25ArgsRe(10,20))//Function call (argumemts)

//Function Expression / Anonymous Function :

let funName = function (){ // FUnction definition (parameters)

    console.log("This is a function expression");
}

funName()

//Arrow Function :


let funName1 = () => { // Fat arrow replacing function keyword

    console.log("This is a arrow function ");
}

funName1()

//Single line arrow function 

const funName3 = (a,b) => a+b;

console.log(funName3(10,20));












