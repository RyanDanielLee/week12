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

buttonRef.addEventListener("click", alertUser, {once: true});
buttonRef.addEventListener("click", changeBackgroundPink);
buttonRef.addEventListener("click", changeText);

