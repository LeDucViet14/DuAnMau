let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchIcon = document.querySelector('#search-icon');
let closes = document.querySelector('#close');
let userIcon = document.querySelector('#user-icon');
let closeLogin = document.querySelector('#close-login');
let user = document.getElementById('user');
let pass = document.getElementById('pass');

menu.onclick = function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// window.onscroll = () =>{
//     menu.classList.remove('fa-times');
//     navbar.classList.remove('active');
// }

searchIcon.onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

closes.onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

userIcon.onclick = ()=>{
    document.querySelector('.user').classList.toggle('active');
}

closeLogin.onclick = ()=>{
    document.querySelector('.user').classList.remove('active');
}

// slider
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
});


//review
// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 20,
//     centeredSlides: true,
//     autoplay: {
//       delay: 4500,
//       disableOnInteraction: false,
//     },
//     loop:true,
//     breakpoints: {
//         0: {
//             slidesPerView: 1,
//         },
//         640: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 2,
//         },
//         1024: {
//             slidesPerView: 2,
//         },
//     },

// });

