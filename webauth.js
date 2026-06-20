function signup() {
  
const user = document.getElementById('signupUser').value.trim();

  const pass = document.getElementById('signupPass').value.trim();


  if (user && pass) {

    localStorage.setItem('username', user);

    localStorage.setItem('password', pass);

    alert("Signup successful!");

    window.location.href = "weblogin.html";

  }
 else {

    alert("Please fill out both fields.");

  }
}


function login() {

  const user = document.getElementById('loginUser').value.trim();

  const pass = document.getElementById('loginPass').value.trim();


  const storedUser = localStorage.getItem('username');

  const storedPass = localStorage.getItem('password');


  if (user === storedUser && pass === storedPass) {

    localStorage.setItem('isLoggedIn', 'true');

    localStorage.setItem('username', user);

    alert("Login successful!");

    window.location.href = "webindex.html";

  }
 else {

    alert("Invalid credentials");

  }
}


function checkAuth() {

  if (localStorage.getItem('isLoggedIn') !== 'true') {

    alert("Please login first");

    window.location.href = "weblogin.html";

  }
}


function logout() {

  localStorage.setItem('isLoggedIn', 'false');

  window.location.href = "weblogin.html";

}
