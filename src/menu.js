import pastaImg from "./images/pasta.jpg";
import pizzaImg from "./images/pizza.jpg";
import burgerImg from "./images/burger.jpg";
import coffeeImg from "./images/coffee.jpg";

function menu() {
    const content = document.querySelector("#content");
    const menu = document.createElement("div");

    // adding heading to content
    const heading = document.createElement("h1");
    heading.className = "intro";
    heading.textContent = "Our Menu"
    content.appendChild(heading);

    //adding burger to menu
    const burgerContainer = document.createElement("div");

    const burger = document.createElement("img");
    burger.className = "food";
    burger.src = burgerImg;
    burger.alt = "burger image"
    burgerContainer.appendChild(burger);

    const burgerText = document.createElement("p");
    burgerText.textContent = "Burger: $ 30";
    burgerContainer.appendChild(burgerText);

    menu.appendChild(burgerContainer);

    //adding pizza to menu
    const pizzaContainer = document.createElement("div");

    const pizza = document.createElement("img");
    pizza.className = "food";
    pizza.src = pizzaImg;
    pizza.alt = "pizza image";
    pizzaContainer.appendChild(pizza);

    const pizzaText = document.createElement("p");
    pizzaText.textContent = "Pizza: $ 20";
    pizzaContainer.appendChild(pizzaText);

    menu.appendChild(pizzaContainer);

    //adding pasta to menu
    const pastaContainer = document.createElement("div");

    const pasta = document.createElement("img");
    pasta.className = "food";
    pasta.src = pastaImg;
    pasta.alt = "pasta image";
    pastaContainer.appendChild(pasta);

    const pastaText = document.createElement("p");
    pastaText.textContent = "Pasta: $ 25"
    pastaContainer.appendChild(pastaText);

    menu.appendChild(pastaContainer);

    //adding coffee to menu
    const coffeeContainer = document.createElement("div");

    const coffee = document.createElement("img");
    coffee.className = "food";
    coffee.src = coffeeImg;
    coffee.alt = "coffee image";
    coffeeContainer.appendChild(coffee);

    const coffeeText = document.createElement("p");
    coffeeText.textContent = "Coffee: $ 10";
    coffeeContainer.appendChild(coffeeText);

    menu.appendChild(coffeeContainer);

    // adding menu to content
    menu.className = "menu";
    content.appendChild(menu);
}

export {menu};
