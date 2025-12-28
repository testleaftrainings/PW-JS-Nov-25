"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeSignUp = void 0;
var EmployeeSignUp = /** @class */ (function () {
    function EmployeeSignUp() {
        this.eName = "Hari";
        this.eid = "eid1234";
        this.ephno = 989898;
        this.eSalary = 22222;
    }
    EmployeeSignUp.prototype.printDetails = function () {
        console.log("The emp details ".concat(this.eName, " : ").concat(this.eid, " : ").concat(this.ephno, " : ").concat(this.eSalary));
    };
    Object.defineProperty(EmployeeSignUp.prototype, "readData", {
        get: function () {
            return this.eSalary; // First 2222 Second after using "set" we are modifying the salary to  89898
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EmployeeSignUp.prototype, "writeData", {
        set: function (salar) {
            this.eSalary = salar; // 89898
        },
        enumerable: false,
        configurable: true
    });
    return EmployeeSignUp;
}());
exports.EmployeeSignUp = EmployeeSignUp;
// const emp = new EmployeeSignUp() //CReating an object--> instance of the class
// emp.printDetails()
// //console.log(emp.readData)
// emp.writeData=89898
// console.log(emp.readData);
