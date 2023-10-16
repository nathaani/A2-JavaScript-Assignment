//COOKIES//////////////////////////////////////////////////////////////////////
let footer = document.querySelector(".footer");
let cookies = document.querySelector(".cookies");
let cookiesText = document.querySelector(".cookiesText");

let click = false;

cookies.innerHTML = '<a href="#" class="accept-cookies">Accept Cookies</a>';
cookiesText.innerHTML = 'This website uses cookies to improve your experiece, by clicking "accept cookies" you consent to our use of cookies.'

cookies.addEventListener("click", whenClicked);

function whenClicked(event) {
    if (click) {
        cookies.innerHTML = '<a href="#" class="accept-cookies">Accept Cookies</a>';
        cookiesText.innerHTML = 'This website uses cookies to improve your experiece, by clicking "accept cookies" you consent to our use of cookies.'

        click = false;
    } else {
        cookies.innerHTML = '<a href="#" class="accept-cookies">Revoke Cookies</a>';
        cookiesText.innerHTML = 'You have accepted the usage of cookies to improve your experiece on this website, would you like to revoke?'

        click = true;
    }
}
//HIGH CONTRAST////////////////////////////////////////////////////////////////////////

let hcButton = false;

let button = document.querySelector(".button");

let hc = document.querySelector(".highContrast");

let links = document.querySelectorAll("a");

button.addEventListener("click", buttonClicked);
function buttonClicked(event) {

    if (hcButton) {
        hc.style.backgroundColor = "white";
        hc.style.color = "black";
        hc.style.lineHeight = "1.2";
        hc.style.margin = "0.1";
        hc.style.padding = "0";
        
        for(let i = 0; i<links.length; i++){
            links[i].style.color = "blue";
        }

        hcButton = false;
    } else {
        hc.style.backgroundColor = "black";
        hc.style.color = "white";
        hc.style.lineHeight = "2";
        hc.style.margin = "10px";
        hc.style.padding = "10px";
       
        for(let i = 0; i<links.length; i++){
            links[i].style.color = "white";
        }

        hcButton = true;

    }
}

document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.key === "a") {
        if (hcButton) {
            hc.style.backgroundColor = "white";
            hc.style.color = "black";
            hc.style.lineHeight = "1.2";
            hc.style.margin = "0";
            hc.style.padding = "0";

            hcButton = false;
        } else {
            hc.style.backgroundColor = "black";
            hc.style.color = "white";
            hc.style.lineHeight = "2";
            hc.style.margin = "10px";
            hc.style.padding = "10px";

            hcButton = true;

        }
    }
});