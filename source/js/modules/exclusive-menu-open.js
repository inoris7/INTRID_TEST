const exclusiveSearchFields = document.querySelectorAll('.search-form__fields');
const searchFormItems = document.querySelectorAll('.search-form__item-name');

for (let i = 0; i < searchFormItems.length; i++) {
  searchFormItems[i].addEventListener('click', () => {
    exclusiveSearchFields[i].classList.toggle('search-form__fields--closed');
  });
}
