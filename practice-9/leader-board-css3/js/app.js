//CheckList-1 : All h1 heading color

const heading1 = document.getElementsByTagName("h1");
for (const element of heading1) {
  element.style.color = "crimson";
}

//CheckList-2 : Player class RGBA backgroundColor

const player = document.getElementsByClassName("player");
for (const element of player) {
  element.style.backgroundColor = "wheat";
  element.style.padding = "12px";
  element.style.borderRadius = "6px";
}

//Checklist-3: Append new li into ul by clicking

const ul = document.getElementById("ulist");
document.getElementById("li-add-btn").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "DOM List";
  ul.appendChild(li);
});

//Checklist-4: Disable button by increasing input value
const inputField = document.getElementById("input-field");
const pressBtn = document.getElementById("press-btn");

pressBtn.addEventListener("click", function () {
  const inputValue = parseFloat(inputField.value);
  const newInputValue = inputValue + 1;
  inputField.value = newInputValue;
  if (inputField.value == "5") {
    pressBtn.setAttribute("disabled", true);
  }
});
