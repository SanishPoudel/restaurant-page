import image from "./images/home.jpg"

function home() {
    const content = document.querySelector("#content");

    // adding heading
    const heading = document.createElement("h1");
    heading.className = "intro";
    heading.textContent = "Welcome to our restaurant."
    content.appendChild(heading);

    // adding img
    const img = document.createElement("img");
    img.className = "home";
    img.src = image;
    img.alt = "Picture of food";
    content.appendChild(img);

    // adding address
    const address = document.createElement("div");
    address.className = "info";
    address.textContent = "Address: Number 5, Privet Drive, Little Winging, Surrey";
    content.appendChild(address);

    // adding contact
    const contact = document.createElement("div");
    contact.className = "info";
    contact.textContent = "1000000000";
    content.appendChild(contact);
}

export { home }