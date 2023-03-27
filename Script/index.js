const buttonRef = document.querySelector("button");

const alertUser = () => {
    alert("You clicked!!!!");
    //buttonRef.removeEventListener("click", alertUser);
}

const changeBackgroundPink = () => {
    let background = document.querySelector("body");
    background.style.backgroundColor = 'pink';
}

const changeText = () => {
    let buttonChange = document.querySelector("button")

    if (buttonChange.textContent == "Click Me!") {
        buttonChange.textContent = "You Cliked Me";
    }
    else {
        buttonChange.textContent = "Click Me!"
    }
}

const updateImage = () => {
    const image = document.querySelector("#shoppingCart");
    image.setAttribute(
        "src",
        "images/cart.png"
    );
    image.setAttribute("alt", "shopping Cart");
    image.setAttribute("width", 50);
    image.setAttribute("height", 50);
}

buttonRef.addEventListener("click", alertUser, {once: true});
buttonRef.addEventListener("click", changeBackgroundPink);
buttonRef.addEventListener("click", changeText);
buttonRef.addEventListener("click", updateImage);

