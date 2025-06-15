const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
})
