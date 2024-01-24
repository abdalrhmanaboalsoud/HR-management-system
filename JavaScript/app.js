"use strict";

var listOfEmployees = [];
var idCounter = 1000;

Employee.prototype.idGenerator = function () {
    const generatedID = idCounter;
    idCounter++;
    return generatedID;
};

function Employee(fullName, department, level, imageURL = "default.jpg") {
    this.employeeID = this.idGenerator();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.calcSalary();
    listOfEmployees.push(this);
}

Employee.prototype.calcSalary = function () {
    const taxRate = 0.075;

    if (this.level.toLowerCase() === "junior") {
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        this.salary = this.salary * (1 - taxRate);
    } else if (this.level.toLowerCase() === "mid-senior") {
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        this.salary = this.salary * (1 - taxRate);
    } else if (this.level.toLowerCase() === "senior") {
        this.salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        this.salary = this.salary * (1 - taxRate);
    } else {
        return 0;
    }
    return this.salary;
};

Employee.prototype.employeeCard = function () {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    const imgElement = document.createElement("img");
    imgElement.src = `https://raw.githubusercontent.com/LTUC/amman-prep-d15/main/Class-08/lab/assets/${this.imageURL}`;
    imgElement.alt = "Employee Image";
    imgElement.style.width = "100%";

    const pID = document.createElement("p");
    pID.textContent = `Employee's ID: ${this.employeeID}`;

    const pName = document.createElement("p");
    pName.textContent = `Employee's Name: ${this.fullName}`;

    const pSalary = document.createElement("p");
    pSalary.textContent = `Employee's Gross Salary: ${this.salary}`;

    card.appendChild(imgElement);
    card.appendChild(pID);
    card.appendChild(pName);
    card.appendChild(pSalary);

    document.body.appendChild(card);
};

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("lvl").value;
    const imageURL = document.getElementById("img").value;

    const newEmployee = new Employee(fullName, department, level, imageURL);

    renderEmployees();
});

function renderEmployees() {
    for (let i = 0; i < listOfEmployees.length; i++) {
        listOfEmployees[i].employeeCard();
    }
}