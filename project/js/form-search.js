(() => {
    document.querySelector('.header__search-btn-open').addEventListener('click', function () {
    document.querySelector('.header__search-form').classList.add('form__active');
    this.classList.add('active');
  })
  document.querySelector('.header__close-btn-top').addEventListener('click', function () {
    let form = document.querySelector('.header__search-form');
    form.classList.remove('form__active');
    form.querySelector('input').value = '';
    document.querySelector('.header__search-btn-open').classList.remove('active')
  });

  document.addEventListener('click', function (e) {
    let target = e.target;
    let form = document.querySelector('.header__search-form');
    if (!target.closest('.header__top-search')) {
      form.classList.remove('form__active');
      form.querySelector('input').value = '';
      document.querySelector('.header__search-btn-open').classList.remove('active')
    }
  })
})();
