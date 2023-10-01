const nav = document.getElementById('nav');
const burger = document.getElementById('burger');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
    burger.classList.toggle('activesuper');
    nav.classList.toggle('activesuper');
    overlay.classList.toggle('overlay');
});