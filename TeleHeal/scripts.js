// select the menu button and menu close
const menuBtn = document.getElementById('menu-btn');
const menuClose = document.getElementById('menu-close');
// select navigation menu
const navMenu = document.querySelector('nav .navigation ul');

// add event listener
menuBtn.addEventListener('click', function (){
    navMenu.classList.add('active');
});

menuClose.addEventListener('click', function (){
    navMenu.classList.remove('active');
});
