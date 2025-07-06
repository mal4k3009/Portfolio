let toggle = document.querySelector(".toggle");
let menu = document.querySelector(".menu");

let toggleMenu = () => {
    toggle.classList.toggle('active');
    menu.classList.toggle('active');
};

toggle.addEventListener("click", toggleMenu);

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2000,
    reset: true

});

sr.reveal( '.home-text', {})
sr.reveal('.home-img', {delay:200})
sr.reveal('.social', {delay:200})

sr.reveal( '.about-img', {})
sr.reveal( '.heading', {})
sr.reveal('.about-text', {delay:200})

sr.reveal('.services-content', {})

sr.reveal( '.work-text', {})
sr.reveal('.work-img', {delay:200})

sr.reveal( '.app h1', {})
sr.reveal('.app', {delay:200})

sr.reveal( '.form input', {})
sr.reveal( '.form textarea', {})