//Without using append

// document.getElementById("post-btn").addEventListener("click", function () {
//   const inputBox = document.getElementById("input-text");

//   const comment = document.getElementById("comment-text");
//   comment.innerText = inputBox.value;
//   inputBox.value = "";
// });

//1. add button event handler
document.getElementById("post-btn").addEventListener("click", function () {
  //2. get user input
  const inputBox = document.getElementById("input-text");
  //   const userComment = inputBox.value;

  //3. create new paragrap tag
  const Newcomments = document.createElement("p");
  Newcomments.innerText = inputBox.value; //or you can add user comment

  //4. Append the comment
  const commentContainer = document.getElementById("comment-container");
  commentContainer.appendChild(Newcomments);

  //5. clean the comment box
  inputBox.value = "";
});
