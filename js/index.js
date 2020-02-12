const burgerBtn = document.getElementById('burger-btn');
burgerBtn.addEventListener('click', () => {
  showMenu();
});

function showMenu() {
  const menu = document.querySelector('.header__menu');

  if (menu.classList.contains('menu-active')) {
    menu.classList.remove('menu-active');
    burgerBtn.style.color = '#2b4162';
  } else {
    menu.classList.add('menu-active');
    burgerBtn.style.color = '#f1f0ee';
  }
}
