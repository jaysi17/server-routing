const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const navLinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    if (navLinks) {
        if (navLinks.style.display === 'block') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'block';
        }
    }
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        navbar.style.top = "-10vh";
    } else {
        navbar.style.top = "0";
    }
    lastScrollY = window.scrollY;
});


