
import { Interface } from "readline";
import { RBIRegulations } from "./03-interface";

export abstract class Basebank{

    validateKYC():void{
        console.log("KYC complex login seperated from concerete class");
    }

    abstract interestRatePolicy():number

} 

class SBIBank extends Basebank {

    openAccount() : void{
        console.log("SBI accout opened");       

    }
    withdrawMoney():void{
        console.log("Money withdrawn");
        

    }
  interestRatePolicy():number{
        return 7.0;
    }
}

const sbibank = new SBIBank()
sbibank.openAccount()
console.log(sbibank.interestRatePolicy())
sbibank.validateKYC()
/* ************************************************************* */


class HDFC extends Basebank implements RBIRegulations{

    openAccount() : void{
        console.log("SBI accout opened");       

    }
    withdrawMoney():void{
        console.log("Money withdrawn");
        

    }
    interestRatePolicy():number{
        return 6.0;
    }
}

const hdfc = new HDFC()
hdfc.openAccount()
console.log(hdfc.interestRatePolicy())
hdfc.validateKYC()


