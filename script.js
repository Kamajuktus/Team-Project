//code to create scroll Up button
const scrollBtn = document.querySelector('.scroll-btn');

window.addEventListener('scroll', () => {
  if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40){
    scrollBtn.style.display = 'block';
  }else {
    scrollBtn.style.display = 'none';
  }
})

scrollBtn.addEventListener('click', () => {
  window.scroll({
    top: 0,
    behavior:"smooth"
  })
})

//code to change color of navbar after srolling down
var navbar = document.querySelector('.navbar');

window.addEventListener("scroll", function(){
  navbar.classList.toggle("sticky", window.scrollY > 0);
})

//code to open Popup and sign up
var signUp = document.getElementById("register");

signUp.addEventListener('click', function(){
  document.querySelector(".popup-register").style.display = "flex";
})

//code to open Popup and login
var login = document.getElementById("login");

login.addEventListener('click', function(){
  document.querySelector(".popup-login").style.display = "flex";
})

//code to close Popup
var closePopup = document.querySelector(".close");

closePopup.addEventListener('click', function(){
  document.querySelector(".popup").style.display = "none";
})



//VIP page
var sponsor = document.getElementById("one");

sponsor.addEventListener('click', function(){
  document.querySelector(".one").style.display = "flex";
})

var sponsor = document.getElementById("two");

sponsor.addEventListener('click', function(){
  document.querySelector(".two").style.display = "flex";
})

var sponsor = document.getElementById("three");

sponsor.addEventListener('click', function(){
  document.querySelector(".three").style.display = "flex";
})

sponsor.addEventListener('click', function(){
  document.querySelector(".one").style.display = "none";
})

// //login and register code
// var login = document.getElementById("login");
// var register = document.getElementById("register");
// var button = document.getElementById("btn");
//
// login.addEventListener("click", function () {
//   login.style.left = "-420px";
//   register.style.left = "30px";
//   btn.style.left = "110px";
// })
//
// function login() {
//   login.style.left = "30px";
//   register.style.left = "420px";
//   btn.style.left = "0";
// }
