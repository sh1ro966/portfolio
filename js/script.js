const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      btnsClose = document.querySelectorAll('.menu__anim');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
    
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

btnsClose.forEach(item => item.addEventListener('click', () => {
    menu.classList.remove('active');
}));