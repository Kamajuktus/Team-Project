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


//code to close Popup
var closePopup = $(".close");

closePopup.click(function(){
  $(".popup").css("display","none");
});

//code to open Popup and sign up
$("#register-form").click(function(){
  console.log("lol");
  $(".popup").css("display", "flex");
});

//code to open Popup and login
$("#login-form").click(function(){
  $(".popup-login").css("display","flex");
});

//main page toggle images
$("#btn-toToggle").click(function(){
  $("#toggle").slideToggle("slow");
  $("#toggle").css("display", "flex");
});

//VIP page
var clickBtn = function(id){
  $(".in-descr").css("display","flex");
  switch(id){
    case "one":
    $(".head-in-descr").text("Taste Salon");
    $(".text-descr").text("Restaurant with original European cuisine for every day. For all lovers of delicious food and rinks with a unique coffee made from selected grains of their own roasting, fragrant pastries and confectionery products, vitamin salads and sandwiches.");
    $(".discount-text").text("The discount provided for Highvill Kazakhstan customers is 15%.");
    $(".address").text("10 Koshkarbayeva Ave., Highvill Astana, block E2-2");
    $(".phone").text("+7 701 500 50 15");
    break;
    case "two":
    $(".head-in-descr").text("DESIDERIO");
    $(".text-descr").text("Thanks to the combination of creative and successful people who had extensive experience in the furniture market, DESIDERIO was formed in 2005. The main credo for our Company has chosen: to offer a unique product, a high level of service and help in choosing the best solutions for discerning customers.");
    $(".discount-text").text("The discount provided for Highvill Kazakhstan customers is 10% on the product in stock, 15% on the order.");
    $(".address").text("Astana, 20 Mangilik El Ave., block A");
    $(".phone").text("+7 778 233 22 33");
    break;
    case "three":
    $(".head-in-descr").text("Lorena");
    $(".text-descr").text("Furniture from the company Lorena – this is exactly the kitchen that you dreamed of. Every detail, shelf, cabinet and handle is exactly where you wanted them to be. All the furniture is made according to an individual project, so for 27 years of work we have not made two identical kitchens!");
    $(".discount-text").text("The discount provided for Highvill Kazakhstan customers is 10%");
    $(".address").text("Astana, Satpayev str. 16, TD Interior City, 4th floor");
    $(".phone").text("+7 (7172) 277 193, +7 (777) 778 00 18");
    break;
    case "four":
    $(".head-in-descr").text("SMEG");
    $(".text-descr").text("Stylish kitchen appliances from an Italian brand with a long history. Over 60 years of honing your unique design, a selection of the best features, settings and materials to decorate your kitchen today.");
    $(".discount-text").text("The discount provided for Highvill Kazakhstan customers is 5%.%");
    $(".address").text("www.smeg-store.kz");
    $(".phone").text("+7 (727) 311 56 01, +7 (727) 311 10 37");
    break;
  };
  $("#"+id).click(showIt(id));
}
var showIt = function(id){
  $("."+id).show();
};
$("#formShower").click(function(){
  $(".formShow").css("display","flex");
  $(".formShow").show();
});

for(var i = 0; i < 4;i++){
  var index = $(".card-in-VIP")[i];
  // console.log(index);
  index.addEventListener('click', function(event){
    id = event.target.id;
    // console.log(id);
    clickBtn(id);
  });
}

var close = function(){
  $("."+id).hide();
  $(".in-descr").css("display","none");
}

$(".close").click(close);
