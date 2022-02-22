//delete element using display none

document.getElementById("delete-btn").addEventListener("click", function () {
  document.getElementById("secret-text").style.display = "none";
});

//changing background color on focus in input text box

document.getElementById("input-box").addEventListener("focus", function () {
  document.body.style.backgroundColor = "lightcoral";
});

//changing background color on blur out input text box

document.getElementById("input-box").addEventListener("blur", function () {
  document.body.style.backgroundColor = "white";
});

//keyup
/*
document.getElementById("input-box").addEventListener("keyup", function () {
  const inputValue = document.getElementById("input-box").value;
  console.log(inputValue);
});
*/

//change
/*
document.getElementById("input-box").addEventListener("change", function () {
  const inputValue = document.getElementById("input-box").value;
  console.log(inputValue);
});
*/

//keyup and delete text in input box
document
  .getElementById("input-box")
  .addEventListener("keyup", function (event) {
    if (event.target.value == "delete") {
      document.getElementById("delete-btn").removeAttribute("disabled");
    } else {
      document.getElementById("delete-btn").setAttribute("disabled", true);
    }
  });
