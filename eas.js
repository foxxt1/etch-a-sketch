let container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
    let newDiv = document.createElement("div");
    newDiv.classList = "newDiv";
    newDiv.textContent = i + 1;
    container.appendChild(newDiv);
}

let newDiv = document.querySelectorAll(".newDiv");



for (let j = 0; j < newDiv.length; j++) {
    console.log(j, newDiv[j]);
    newDiv[j].addEventListener("mouseover", function () {
    (newDiv[j].classList.contains("newDivHover")) ? newDiv[j].classList = newDiv[j].classList : newDiv[j].classList += " newDivHover";
    });
}
