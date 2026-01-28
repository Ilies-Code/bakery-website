let A = document.querySelector("#menu-open-button") ;
let C = document.querySelector("#menu-close-button") ;
let B = document.querySelector(".navbar .nav-menu") ;
let D = document.querySelectorAll(".nav-menu .nav-link");
A.addEventListener("click",() => {
    B.style.left ="0px" ;
    B.style.transition = "left 0.5s ease" ;
    document.body.classList.toggle("show-mobile");
});
C.addEventListener("click", () => {
    B.style.left ="-300px" ;
    document.body.classList.remove("show-mobile");
});
D.forEach((link)=>{
    link.addEventListener("click",() => {
        B.style.left ="-300px" ;
        document.body.classList.remove("show-mobile");
    });
});
const swiper = new Swiper('.swiper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // responsive breakpoints
    breakpoints : {
        0 :{
            slidesPerView :1 
        },
        786 :{
            slidesPerView :2 
        },
        1024 :{
            slidesPerView :3 
        },
    }
});