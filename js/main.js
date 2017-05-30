var button = document.querySelector(".btn-mobile-size");
var menuMobile = document.querySelector(".menu-mobile-screen");

function toggleOpenClose() {
  if (menuMobile.classList.contains('hidden')) {
      console.log("hola");
    menuMobile.classList.remove('hidden');
  } else {
    menuMobile.classList.add('hidden');
  }
}
button.addEventListener('click', toggleOpenClose);
