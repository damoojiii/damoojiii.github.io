var togglebtn = document.querySelector(".navbtn");
var nav=document.querySelector(".links");
var links=document.querySelector(".links li");

togglebtn.addEventListener("click",function(){
  this.classList.toggle("click");
  nav.classList.toggle("open");
})

var typingEffect = new Typed(".typed",{
    strings: ["Adrian Jensen","AJ","Sen"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,
})
var lastScrollTop; 

navbar = document.getElementById('select'); 


window.addEventListener('scroll',function(){
  var scrollTop = window.scrollY || document.documentElement.scrollTop;

  if(scrollTop > lastScrollTop){ 
    navbar.style.top='-80px';
  }
  else{
    navbar.style.top='0';
  }
  lastScrollTop = scrollTop; 
});


