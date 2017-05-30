var button = document.querySelector(".btn-mobile-size");
var menuMobile = document.querySelector(".menu-mobile-screen");

function toggle() {
  if (menuMobile.classList.contains('hidden')) {
    menuMobile.classList.remove('hidden');
  } else {
    menuMobile.classList.add('hidden');
  }
}
button.addEventListener('click', toggle);
