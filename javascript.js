//TABLE VISITORS///////////////////////////////////////////////////////////////
let monthlyVisitors = {
    "months": ["April", "May", "June", "July", "August", "September"],
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
//COOKIES//////////////////////////////////////////////////////////////////////
let footer = document.querySelector("#footer");
let cookies = document.querySelector("#cookies");
let cookiesText = document.querySelector("#cookiesText");

let click = false;

cookies.innerHTML = '<a href="#" id="accept-cookies">Accept Cookies</a>';
cookiesText.innerHTML = 'This website uses cookies to improve your experiece, by clicking "accept cookies" you consent to our use of cookies.'

cookies.addEventListener("click", whenClicked);

function whenClicked(event) {
    if (click) {
        cookies.innerHTML = '<a href="#" id="accept-cookies">Accept Cookies</a>';
        cookiesText.innerHTML = 'This website uses cookies to improve your experiece, by clicking "accept cookies" you consent to our use of cookies.'

        click = false;
    } else {
        cookies.innerHTML = '<a href="#" id="accept-cookies">Revoke Cookies</a>';
        cookiesText.innerHTML = 'You have accepted the usage of cookies to improve your experiece on this website, would you like to revoke?'

        click = true;
    }
}
//HIGH CONTRAST////////////////////////////////////////////////////////////////////////

let hcButton = false;

let button = document.querySelector("#button");

let hc = document.querySelector("#highContrast");

button.addEventListener('click', buttonClicked);
function buttonClicked(event) {

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

    }
}

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'a') {
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

        }
    }
});