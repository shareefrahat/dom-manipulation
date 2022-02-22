//h2 tag color : lightblue

const h2color = document.getElementsByTagName("h2");

for (var i = 0; i < h2color.length; i++) {
  h2color[i].style.color = "lightblue";
}

//backpack sector bgcolor = tomato

document.getElementById("backpack").style.backgroundColor = "tomato";

//card border radius = 30px

const cardBorder = document.getElementsByClassName("card");
for (var i = 0; i < cardBorder.length; i++) {
  cardBorder[i].style.borderRadius = "30px";
}

//function for click handler

function myTask() {
  console.log("You have clicked on Mega LCD button");
}

//Remove button on click

const btnRemove = document.getElementsByClassName("btn-remove");
for (const btn of btnRemove) {
  btn.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(btn);
  });
}

//active disabled btn on focus and writing "email"

const inputBox = document.getElementById("email-box");
inputBox.addEventListener("keyup", function (event) {
  if (event.target.value == "email") {
    document.getElementById("btn-submit").removeAttribute("disabled");
  } else {
    document.getElementById("btn-submit").setAttribute("disabled", true);
  }
});

//change picture on mouseenter
const myImg = document.getElementById("my-img");
myImg.addEventListener("mouseenter", imgChange);
function imgChange() {
  myImg.src = "images/shoes/shoe-2.png";
}

//change the background color on double click

document.getElementById("subs").addEventListener("dblclick", function () {
  document.getElementById("subs").style.backgroundColor = "lightblue";
});
