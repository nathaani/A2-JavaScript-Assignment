//TABLE VISITORS//
let monthlyVisitors = {
    "months": ["April", "May", "June", "July",  "August",  "September"],
    "visitors": ["5k", "3k", "500", "2k", "1k", "1k"]

}
let section = document.querySelector("#section");

let visitorsTable = document.createElement("table");
visitorsTable.style.border = "1px solid black";

section.appendChild(visitorsTable);

for (let i = 0; i < monthlyVisitors.months.length; i++) {
    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid black";

    let tableHeader = document.createElement("th");
    tableHeader.style.border = "1px solid black";

    let tableData = document.createElement("td");
    tableData.style.border = "1px solid black";

    tableHeader.textContent = monthlyVisitors.months[i];
    tableData.textContent = monthlyVisitors.visitors[i];

    tableRow.appendChild(tableHeader);
    tableRow.appendChild(tableData);
    visitorsTable.appendChild(tableRow);
}