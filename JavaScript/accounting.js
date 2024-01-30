"use strict";
var localArr = localStorage.getItem("employees");
var fixedArr = JSON.parse(localArr);

let tableElemnt = document.getElementById("displayTable");
let counters = {
    adminCount: 0,
    adminSalary: 0,
    markCount: 0,
    markSalary: 0,
    develCount: 0,
    develSalary: 0,
    financeCount: 0,
    financeSalary: 0
}
function numOfEmps(counters) {
    for (let i = 0; i < fixedArr.length; i++) {

        if (fixedArr[i].department.toLowerCase() === "administration") {
            counters.adminCount++;
             if (fixedArr[i].salary)    
              counters.adminSalary+=fixedArr[i].salary;
        } else if (fixedArr[i].department.toLowerCase() === "marketing") {
            counters.markCount++;
              if (typeof fixedArr[i].salary === 'number')
                counters.markSalary+=fixedArr[i].salary;
        } else if (fixedArr[i].department.toLowerCase() === "development") {
            counters.develCount++;
                if (typeof fixedArr[i].salary === 'number')
                 counters.develSalary+=fixedArr[i].salary;
        } else if (fixedArr[i].department.toLowerCase() === "finance") {
            counters.financeCount++;
                if (typeof fixedArr[i].salary === 'number')
                    counters.financeSalary+=fixedArr[i].salary;
        }
    }
}

function renderTable() {
    numOfEmps(counters);
    // Create table body
    let tableBody = document.createElement("tbody");
    tableElemnt.appendChild(tableBody);
    //---------------------------------------------------
    let trElement = document.createElement("tr");
    trElement.textContent = "Administration";
    tableBody.appendChild(trElement);

    let tdElement = document.createElement("td");
    tdElement.textContent = counters.adminCount;
    trElement.appendChild(tdElement);

    let td2Element = document.createElement("td");
    td2Element.textContent = counters.adminSalary;
    trElement.appendChild(td2Element);

    let td3Element = document.createElement("td");
    td3Element.textContent = counters.adminSalary/counters.adminCount;
    trElement.appendChild(td3Element);
    // -----------------------------------------------
    let tr2Element = document.createElement("tr");
    tr2Element.textContent = "Marketing";
    tableBody.appendChild(tr2Element);

    let td5Element = document.createElement("td");
    td5Element.textContent = counters.markCount;
    tr2Element.appendChild(td5Element);

    let td6Element = document.createElement("td");
    td6Element.textContent = counters.markSalary;
    tr2Element.appendChild(td6Element);

    let td7Element = document.createElement("td");
    td7Element.textContent = counters.markSalary/counters.markCount;
    tr2Element.appendChild(td7Element);
    // -----------------------------------------------
    let tr3Element = document.createElement("tr");
    tr3Element.textContent = "Development";
    tableBody.appendChild(tr3Element);

    let td8Element = document.createElement("td");
    td8Element.textContent = counters.develCount;
    tr3Element.appendChild(td8Element);

    let td9Element = document.createElement("td");
    td9Element.textContent = counters.develSalary;
    tr3Element.appendChild(td9Element);

    let td10Element = document.createElement("td");
    td10Element.textContent = counters.develSalary/counters.develCount;
    tr3Element.appendChild(td10Element);

    // -----------------------------------------------
    let tr4Element = document.createElement("tr");
    tr4Element.textContent = "Finance";
    tableBody.appendChild(tr4Element);

    let td11Element = document.createElement("td");
    td11Element.textContent = counters.financeCount;
    tr4Element.appendChild(td11Element);

    let td12Element = document.createElement("td");
    td12Element.textContent = counters.financeSalary;
    tr4Element.appendChild(td12Element);

    let td13Element = document.createElement("td");
    td13Element.textContent = counters.develSalary/counters.develCount;
    tr4Element.appendChild(td13Element);
    //--------------------------------------------------------------------
    // Create table footer
    let tableFoot = document.createElement("tfoot");
    tableElemnt.appendChild(tableFoot);
    let totalOfEmpOfDep = counters.adminCount + counters.develCount + counters.markCount + counters.financeCount;
    let totalOfSalOfDep = counters.adminSalary + counters.develSalary + counters.markSalary + counters.financeSalary;
    let averageOfAll = totalOfSalOfDep/totalOfEmpOfDep ;
    // -----------------------------------------------
    let tr5Element = document.createElement("tr");
    tr5Element.textContent = "Total";
    tableFoot.appendChild(tr5Element);

    let td14Element = document.createElement("td");
    td14Element.textContent = totalOfEmpOfDep;
    tr5Element.appendChild(td14Element);

    let td15Element = document.createElement("td");
    td15Element.textContent = totalOfSalOfDep;
    tr5Element.appendChild(td15Element);

    let td16Element = document.createElement("td");
    td16Element.textContent = averageOfAll;
    tr5Element.appendChild(td16Element);
    //-----------------------------------------------
    document.body.appendChild(tableElemnt);
}

renderTable();