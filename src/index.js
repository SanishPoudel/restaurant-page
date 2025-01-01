// importing stuff
import "./style.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

// Initial loading page
home();

// query selectors
const content = document.querySelector("#content");
const homeButton = document.querySelector(".homeButton");
const menuButton = document.querySelector(".menuButton");
const aboutButton = document.querySelector(".aboutButton");

// function to clear div#content
function clearContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

//event listeners

homeButton.addEventListener("click", ()=> {
    clearContent();
    home();
})

menuButton.addEventListener("click", ()=> {
    clearContent();
    menu();
})

aboutButton.addEventListener("click", ()=> {
    clearContent();
    about();
})