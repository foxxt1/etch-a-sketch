// container declaration before func so that the div elements can have somewere to be put
let container = document.querySelector(".container");

const root = document.querySelector(":root");

function generateGrid(amount) {

    if (amount > 100) {
        alert("That amount was greater than 100. Setting to 100.")
        amount = 100
    }
    root.style.setProperty("--squareNumPerSide", amount);

    const display = document.querySelector(".sideSquareDisplay")
    display.textContent = `${amount} squares per side`

    for (let i = 0; i < (amount * amount); i++) {
        let newDiv = document.createElement("div");
        newDiv.classList = "newDiv";
        // newDiv.textContent = i + 1;
        // newDiv.addEventListener("mouseover", changeOnHover)
        container.appendChild(newDiv);
    }
}
generateGrid(4);

// newDiv declaration so that the previously generated divs can be seen and counted
let newDiv = document.querySelectorAll(".newDiv");
function divEventListeners() {
    for (let j = 0; j < newDiv.length; j++) {
        newDiv[j].addEventListener("mouseover", function () {
        (newDiv[j].classList.contains("newDivHover")) ?
        (newDiv[j].classList = newDiv[j].classList) : (
            newDiv[j].classList += " newDivHover"
            // ,root.style.setProperty("--filledInNum", randomColor())
        );
        });
        // newDiv[j].addEventListener("mouseover", function ()  {
        //     if (newDiv[j].classList.contains("newDivHover")) {
        //         (newDiv[j].classList = newDiv[j].classList, root.style.setProperty("--filledInNum", randomColor()))
        //     } else if {

        //     }
        // }
    }
}
divEventListeners();




function changeOnHover() {
    (newDiv.classList.contains("newDivHover")) ? newDiv.classList = newDiv.classList : newDiv.classList += " newDivHover";
    // root.style.setProperty("--filledInNum", ++)
}


let sideSquareCountButton = document.querySelector(".sideSquareCount")
sideSquareCountButton.addEventListener("click", onClick)
    
    
function onClick() {
    let inputAmount = prompt("How many squares would you like per side? \n (Max 100)", 4)

    for (let x = 0; x < newDiv.length; x++) {
        container.innerHTML = ""
    }
    generateGrid(inputAmount);
    newDiv = document.querySelectorAll(".newDiv")
    divEventListeners();
}

let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", onResetClick);

function onResetClick() {
    // location.reload()
    for (let x = 0; x < newDiv.length; x++) {
        container.innerHTML = ""
    }
    generateGrid(4);
    newDiv = document.querySelectorAll(".newDiv")
    divEventListeners();
}

function randomColor() {
    let color = []
    let array = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random()*16);
        color.push(array[num]);
    }
    return `#${color.join("")}`;
}





