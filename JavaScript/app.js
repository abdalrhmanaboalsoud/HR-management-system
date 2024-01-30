"use strict";

var listOfEmployees = [];
var idCounter = 1000;

function Employee(fullName, department, level, imageURL = "default.jpg") {
    this.employeeID = idCounter++;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.calcSalary();
    listOfEmployees.push(this);
}

Employee.prototype.calcSalary = function () {
    const taxRate = 0.075;
    let baseSalary = 0;

    if (this.level.toLowerCase() === "junior") {
        baseSalary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
    } else if (this.level.toLowerCase() === "mid-senior") {
        baseSalary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
    } else if (this.level.toLowerCase() === "senior") {
        baseSalary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
    }

    return baseSalary * (1 - taxRate);
};

Employee.prototype.employeeCard = function () {
    const card = document.createElement("div");
    card.classList.add("employee-card");

    const imgElement = document.createElement("img");
    imgElement.src = `${this.imageURL}`;
    imgElement.alt = "Employee Image";
    imgElement.style.width = "250px";
    imgElement.style.height = "250px";

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

function setDataLS (data){
    
    let comingData = JSON.stringify(data);
    localStorage.setItem("employees", comingData);
    
}

function getData(){
    let reversData1 =localStorage.getItem("employees");
    let reverseArr = JSON.parse(reversData1);
    for ( let i = 0; i<reverseArr.length;i++){
        new Employee (reverseArr[i].fullName, reverseArr[i].department, reverseArr[i].level, reverseArr[i].imageURL);
    }
    renderLastEmployee();
}

document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const fullName = document.getElementById("fullName").value;
    const department = document.getElementById("department").value;
    const level = document.getElementById("lvl").value;
    const imageURL = document.getElementById("img").value;

    // localStorage.setItem("fullName", fullName);
    // localStorage.setItem("department", department);
    // localStorage.setItem("level", level);
    // localStorage.setItem("imageURL", imageURL);

    // // Log the stored values for verification
    // localStorage.getItem("fullName");
    // localStorage.getItem("department");
    // localStorage.getItem("level");
    // localStorage.getItem("imageURL");

    const newEmployee = new Employee(fullName, department, level, imageURL);

    renderLastEmployee();
    setDataLS(listOfEmployees);
});

function renderLastEmployee() {
    const newEmployee = listOfEmployees[listOfEmployees.length - 1];
    newEmployee.employeeCard();
}