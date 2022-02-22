//remove child method-1
/*
const items = document.getElementsByClassName("items");
for (const item of items) {
  item.addEventListener("click", function () {
    document.getElementById("item-container").removeChild(item);
  });
}
*/
//remove child method-2
/*
const items = document.getElementsByClassName("items");
for (const item of items) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(item);
  });
}
*/
//add item using createElement

document.getElementById("add-btn").addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "Brand New item";
  const parent = document.getElementById("item-container");
  parent.appendChild(li);
});

document
  .getElementById("item-container")
  .addEventListener("click", function (myEvent) {
    myEvent.target.parentNode.removeChild(myEvent.target);
  });
