"use strict;"
const listOfEmployees = [];
function GenerateAnEmployee(employeeID, fullName, department, level, salary, imageURL = "No Image",) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = salary;
    listOfEmployees.push(this);
}
GenerateAnEmployee.prototype.calcSalary = function (min, max) {
    const taxRate = 0.075;

    if (this.level.toLowerCase() === "junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        const grossSalary = this.salary * 12;
        this.salary = grossSalary * (1 - taxRate);
    } else if (this.level.toLowerCase() === "mid-senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        const grossSalary = this.salary * 12;
        this.salary = grossSalary * (1 - taxRate);
    } else if (this.level.toLowerCase() === "senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        const grossSalary = this.salary * 12;
        this.salary = grossSalary * (1 - taxRate);
    } else {
        document.write("Invalid Level!")
    }
}
GenerateAnEmployee.prototype.empolyeeSalaryAndName = function () {
    document.write(`<p>Employee's Name : ${this.fullName}</p>`);
    document.write(`<p>Employee's Gross Salary : ${this.salary}</p>`);
    document.write('<hr>');
}

let employee0 = new GenerateAnEmployee("1000", "Ghazi Samer", "Administration", "Senior");
let employee1 = new GenerateAnEmployee("1001", "Lana Ali", "Finance", "Senior");
let employee2 = new GenerateAnEmployee("1002", "Tamara Ayoub", "Marketing", "Senior");
let employee3 = new GenerateAnEmployee("1003", "Safi Walid", "Administration", "Mid-Senior");
let employee4 = new GenerateAnEmployee("1004", "Omar Zaid", "Development", "Senior");
let employee5 = new GenerateAnEmployee("1005", "Rana Saleh", "Development", "Junior");
let employee6 = new GenerateAnEmployee("1006", "Hadi Ahmad", "Finance", "Mid-Senior");


function renderEmployees() {
    for (let i = 0; i < listOfEmployees.length; i++) {
        listOfEmployees[i].calcSalary();
        listOfEmployees[i].empolyeeSalaryAndName();
    }
}

renderEmployees();





