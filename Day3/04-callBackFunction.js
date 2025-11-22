/* 

function checkTicketAvailabilty(isAvailable,x){ // main function checkTicketAvailabilty

    console.log("Checking ticket availabilty..");
    
    setTimeout(() => {

        if(isAvailable){
        console.log("Tickets are available");
        x() 

        }else{
            console.log("TIckets are not available");            
        }       
    }, 2000);
}

function youGetCall(){
    console.log("Your tickets are ready");    
}



checkTicketAvailabilty(true,youGetCall) */


function checkAvailability(callBack1){
    console.log(`Checking movie name..`);

    setTimeout(() => {
      //  console.log(`Movie ${MovieName} is available`);
        callBack1();          
    }, 2000);  

}

function playMovie(){
    console.log(`Now playing the movie`);    
}



checkAvailability("SpiderMan",playMovie)
//checkAvailability("Avengers",playMovie)