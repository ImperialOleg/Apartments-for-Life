const navMain = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__button');

navMain.classList.remove('main-nav--nojs');

navButton.addEventListener('click', function () {
  const isClosed = navMain.classList.contains('main-nav--closed');
  if (isClosed) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
