// <h1 class="intro">About us</h1>
// <p>What else do you wanna know? It's a restaurant. You come here to eat food by paying money. If you want to know who made this, click on this icon below.</p>
// <a href="https://github.com/SanishPoudel"><img class="contact" src="./images/contact.jpg" alt="contact">

import contact from "./images/contact.jpg";

function about() {
    const content = document.querySelector("#content");

    // adding heading
    const heading = document.createElement("h1");
    heading.className = "intro";
    heading.textContent = "About us"
    content.appendChild(heading);

    // adding text
    const paragraph = document.createElement("p");
    paragraph.textContent = "What else do you want to know? It's a restaurant. You come here to eat food by paying money. If you want to know who made this, click on this icon below."
    content.appendChild(paragraph);

    // adding link icon
    const link = document.createElement("a");
    link.href = "https://github.com/SanishPoudel";
    const icon = document.createElement("img");
    icon.className = "contact";
    icon.src = contact;
    icon.alt = "Logo with link";
    link.appendChild(icon);
    content.appendChild(link);
}

export { about };