

// for (let i=1;i<10;i++){

//     if(i%2===0){
//         console.log(`Even:`+i);
        
//     }else{
//         console.log(`odd:`+i);
        
//     }
    
// }

//WHile loop with pagination example :

// let hasNextPage = true;

// while (condition) {
//     //hasNextPage= await page.locator(`.navigationButton).isVisble()
//    if(hasNextPage){
//     console.log("Moving to next page");    
//    } else{
//     console.log("No more page");
    
//    }
// }

//while loop

let number = 10;

while(number){ //true here when number value turns "0" which m,means it is falsy it come out of thw while loop
    console.log(number); //10,9,...1
    number--    //9,8,...0(falsy)
}

//do while :

let count = 1;
do{
console.log(count);
}while(num<=0)//false