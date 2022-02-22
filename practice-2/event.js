// using function
function blogText() {
  const para = document.getElementById("blog-text");
  para.innerText = "This is a text set by function";
}
//direct method using addEvent

document.getElementById("handle-event").addEventListener("click", function () {
  document.getElementById("my-text").innerText =
    "This text is sets by Event Listener";
});

//input element
document.getElementById("input-handle").addEventListener("click", function () {
  const nameField = document.getElementById("my-input");

  const p = document.getElementById("output-text");
  p.innerText = nameField.value;
  nameField.value = "";
});
