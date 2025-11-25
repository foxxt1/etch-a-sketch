// container declaration before func so that the div elements can have somewere to be put
let container = document.querySelector(".container");

function generateGrid(amount) {
    for (let i = 0; i < amount; i++) {
        let newDiv = document.createElement("div");
        newDiv.classList = "newDiv";
        newDiv.textContent = i + 1;
        // newDiv.addEventListener("mouseover", changeOnHover)
        container.appendChild(newDiv);
    }
}
generateGrid(16);

// newDiv declaration so that the previously generated divs can be seen and counted
let newDiv = document.querySelectorAll(".newDiv");
function divEventListeners() {
    for (let j = 0; j < newDiv.length; j++) {
        newDiv[j].addEventListener("mouseover", function () {
        (newDiv[j].classList.contains("newDivHover")) ? newDiv[j].classList = newDiv[j].classList : newDiv[j].classList += " newDivHover";
        });
    }
}
divEventListeners();




function changeOnHover() {
    (newDiv.classList.contains("newDivHover")) ? newDiv.classList = newDiv.classList : newDiv.classList += " newDivHover";
}


let sideSquareCountButton = document.querySelector(".sideSquareCount")
sideSquareCountButton.addEventListener("click", onClick)
    
    
function onClick() {
    let inputAmount = prompt("How many squares would you like per side? \n (Max 100)", 16)

    console.log(newDiv.length);

    for (let x = 0; x < newDiv.length; x++) {
        console.log(newDiv[x], x)
        // container.removeChild(newDiv[x]);
        container.innerHTML = ""
    }
    generateGrid(inputAmount);
    newDiv = document.querySelectorAll(".newDiv")
    divEventListeners();
}







