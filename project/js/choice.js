const defaultSelect = () => {
  const element = document.querySelector('.gallery__filter-select');
  const choices = new Choices(element, {
    placeholder: false,
    placeholderValue: null,
    searchEnabled: false,
  });
};

defaultSelect ();

// const element = document.querySelector('.choice');
// const choices = new Choices(element, {
//   placeholder: false,
//   placeholderValue: null,
//   searchEnabled: false,
// });



