const mobileMenuButton = document.querySelector('.main-header__mobile-button');
const mobileNavigation = document.querySelector('.main-header__navigation');

if (mobileMenuButton && mobileNavigation) {

  const setMobileMenuToggle = (evt) => {
    evt.preventDefault();
    mobileNavigation.classList.toggle('main-header__navigation--closed');
  };

  mobileMenuButton.addEventListener('click', setMobileMenuToggle);
}

