function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin(); //recursive way te same function ke call korse
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

//calc implementation using event bubble

document.getElementById("key-pad").addEventListener("click", function (event) {
  const number = event.target.innerText; //keypad er child element bubble kore access kora hoise
  const calcInput = document.getElementById("typed-numbers");
  if (isNaN(number)) {
    if (number == "C") {
      calcInput.value = "";
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

//verify Pin submit button

function verifyPin() {
  const displayPin = document.getElementById("display-pin").value;
  const typedNumbers = document.getElementById("typed-numbers").value;
  const notifySuccess = document.getElementById("notify-success");
  const notifyFailed = document.getElementById("notify-failed");
  if (displayPin == typedNumbers) {
    if (displayPin == "") {
      notifyFailed.style.display = "block";
      notifySuccess.style.display = "none";
    } else {
      notifySuccess.style.display = "block";
      notifyFailed.style.display = "none";
    }
  } else {
    notifyFailed.style.display = "block";
    notifySuccess.style.display = "none";
  }
}
