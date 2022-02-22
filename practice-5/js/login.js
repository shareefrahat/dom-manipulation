document.getElementById("login-submit").addEventListener("click", function () {
  const userEmail = document.getElementById("user-email");
  const userEmailInput = userEmail.value;

  const userPassword = document.getElementById("user-password");
  const userPasswordInput = userPassword.value;

  if (userEmailInput == "admin@email.com" && userPasswordInput == "12345") {
    window.location.href = "banking.html";
  } else {
    console.log("email and password is not valid");
  }
});

//------------Jhankar vai's Code---------------\\

/* document.getElementById('login-submit').addEventListener('click', function () {
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password
    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
});
*/
