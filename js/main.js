/// sidebar toggle menu
var nav = document.querySelector(".img-123");
var menu =  document.querySelector(".menu");

nav.addEventListener("click", function(){
   menu.classList.toggle("active");
});

window.addEventListener("scroll", function(){
    menu.classList.remove("active");
});
