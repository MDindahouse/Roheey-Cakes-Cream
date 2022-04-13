// Menu Section
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-ham')
const navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
};

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
};

const navLink = document.querySelectorAll('.nav_link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
};
navLink.forEach(n => n.addEventListener('click', linkAction));
// End of Menu Section


// Change Header BG Color
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// End of Change Header BG Color

// Scroll Up 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
};
window.addEventListener('scroll', scrollUp);
// End of Scroll Up

// Animate On Scroll
AOS.init({
    offSet: 120,
    duration: 1500,
    dataAosEasing: "ease-in-out",
});
// End of Animate On Scroll

// Swiper
var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "2",
    loop: true,
    loopedSlides: 7,
    watchSlidesVisibility: true,
    spaceBetween: 50,
    coverflowEffect: {
        rotate: 0,
    },
});
// End of Swiper