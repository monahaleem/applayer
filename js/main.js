function showMenu() {
  const navs = document.querySelectorAll('.MenuItems')
  
  navs.forEach(nav => nav.classList.toggle('menuLinksToggleShow'));
}
document.querySelector('.buttonMenu')
  .addEventListener('click', showMenu);