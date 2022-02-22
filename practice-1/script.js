//h3 elements color changing using loop.

var h3Elements = document.getElementsByTagName("h3");

for (var i = 0; i < h3Elements.length; i++) {
  h3Elements[i].style.color = "blue";
}

//css query selector and query selector all
document.querySelector(".myBlog p").style.color = "mediumseagreen";
document.querySelectorAll("#last-para")[0].style.backgroundColor = "tomato";

//Create Element
// document.createElement('tagName')

//step-1: create element
const li = document.createElement("li");
li.innerText = "New Blog list-5";

//step-2: where to add
const ul = document.getElementById("blog-list");

//step-3: append new element
ul.appendChild(li);

//NEW ARTICLE CREATE

const article = document.createElement("article");
const h3 = document.createElement("h3");
h3.innerText = "My JS Article";
const p = document.createElement("p");
p.innerText =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque dolorem debitis similique eum, accusamus";

//append h3 and p into article
article.appendChild(h3);
article.appendChild(p);

//append article into NewSection

const newSection = document.getElementById("newSection");
newSection.appendChild(article);

//new element into article using caret sign

article.innerHTML = `
<h4>Haeading using inner HTML</h4>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
`;
