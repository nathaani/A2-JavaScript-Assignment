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

//HUGH CONTRAST//

let hcButton = false;

const button = document.querySelector("#button");

button.addEventListener('click', whenClicked);

function whenClicked(event){
    let hc = document.querySelector("#highContrast");
    
    if (hcButton) {
        hc.style.backgroundColor = 'white';
        hc.style.color = 'black';
        hc.style.lineHeight = "1.2";
        hc.style.margin = '0';
        hc.style.padding = '0';

        hcButton = false;
    } else {
        hc.style.backgroundColor = 'black';
        hc.style.color = 'white';
        hc.style.lineHeight = "2";
        hc.style.margin = '10px';
        hc.style.padding = '10px';

        hcButton = true;

}}
