const catalogButton = document.querySelector('.main-header__nav-link--catalog');
const catalogList = document.querySelector('.main-header__catalog');
const catalogArrow = document.querySelector('.main-header__nav-arrow');

if (catalogButton && catalogList && catalogArrow) {

  const setCatalogOpened = (evt) => {
    evt.preventDefault();
    catalogList.classList.toggle('visually-hidden');
    catalogArrow.classList.toggle('main-header__nav-arrow--up');
  };

  catalogButton.addEventListener('click', setCatalogOpened);
}
