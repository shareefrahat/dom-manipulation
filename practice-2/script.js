//function for onclick

function makeRed() {
  document.body.style.backgroundColor = "red";
}

//id selector onclick

const blueBg = document.getElementById("make-blue");
blueBg.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

//anonymous function

const greenBg = document.getElementById("make-green");
greenBg.onclick = function () {
  document.body.style.backgroundColor = "green";
};

//addEventListener click function

const purpleBg = document.getElementById("make-purple");
purpleBg.addEventListener("click", makePurple);

function makePurple() {
  document.body.style.backgroundColor = "purple";
}

//addEventListener click direct function
const tealBg = document.getElementById("make-teal");
tealBg.addEventListener("click", function () {
  document.body.style.backgroundColor = "teal";
});
