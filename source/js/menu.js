let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.menu-btn');

navToggle.classList.remove('menu-btn--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--open');
    navToggle.classList.remove('menu-btn--closed');
    navToggle.classList.add('menu-btn--open');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--open');
    navToggle.classList.add('menu-btn--closed');
    navToggle.classList.remove('menu-btn--open');
  }
});
