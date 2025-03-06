const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('.nav-menu');
const openMenu = document.querySelector('#menu-humb');

closeBtn.addEventListener('click', () => {
  menu.classList.remove('show');
});

openMenu.addEventListener('click', () => {
  menu.classList.add('show');
});


const loading = () => {
  console.log("index.js is connected");
};