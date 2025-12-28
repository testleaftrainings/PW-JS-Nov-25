import { EmployeeSignUp } from "./01-accessModifiers";


class HR extends EmployeeSignUp { 
// HR ==> Derived class inherits all the properies and methods of the parent/ baseclass through single inheritance done using extends keywprd

    constructor(){
       super();//MUst call the parent class constructor first
        console.log("This is the constructor of HR CLass/ Derived class");
        this.eName="Update Name"
        console.log(this.eName);   
    }
    
    empUpdate(){
      //  this.ephno=55555
        console.log(this.ephno)
    }

}

let emp1 = new HR()
emp1.empUpdate()



