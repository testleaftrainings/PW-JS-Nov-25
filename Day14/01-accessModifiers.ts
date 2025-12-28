
export class EmployeeSignUp{

    public eName : string
    public static eid : string
    protected readonly ephno : number
    private eSalary : number

    constructor(){
    this.eName ="Hari"
    EmployeeSignUp.eid = "eid1234"
    this.ephno=989898
    this.eSalary = 22222

    }

    printDetails(){
        console.log(`The emp details ${this.eName} : ${EmployeeSignUp.eid} : ${this.ephno} : ${this.eSalary}`);
        
    }

    public get readData(){
        return this.eSalary // First 2222 Second after using "set" we are modifying the salary to  89898
    }

    public set writeData(salar:number){ // salar ==> capture ==> emp.writeData=89898
        this.eSalary=salar // 89898
    }

}

// const emp = new EmployeeSignUp() //CReating an object--> instance of the class
// emp.printDetails()
// //console.log(emp.readData)
// emp.writeData=89898
// console.log(emp.readData);




