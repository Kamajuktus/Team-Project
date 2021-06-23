// Скрол до каждой секции
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

// Всплывающее окно
var dialog = document.querySelector('#dialog');
document.querySelector('#show').onclick = function() {
  dialog.show();
};
document.querySelector('#close').onclick = function() {
  dialog.close();
};

var dialog1 = document.querySelector('#dialog1');
document.querySelector('#show1').onclick = function() {
  dialog1.show();
};
document.querySelector('#close1').onclick = function() {
  dialog1.close();
};

var dialog2 = document.querySelector('#dialog2');
document.querySelector('#show2').onclick = function() {
  dialog2.show();
};
document.querySelector('#close2').onclick = function() {
  dialog2.close();
};

var dialog3 = document.querySelector('#dialog3');
document.querySelector('#show3').onclick = function() {
  dialog3.show();
};
document.querySelector('#close3').onclick = function() {
  dialog3.close();
};

var dialog4 = document.querySelector('#dialog4');
document.querySelector('#show4').onclick = function() {
  dialog4.show();
};
document.querySelector('#close4').onclick = function() {
  dialog4.close();
};

var dialog5 = document.querySelector('#dialog5');
document.querySelector('#show5').onclick = function() {
  dialog5.show();
};
document.querySelector('#close5').onclick = function() {
  dialog5.close();
};




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
