(() => {
  function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function (evt) {
      if (this._isOpened) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        this._isOpened = false;
      } else {
        this._isOpened = true;
      }
    });

    search.addEventListener('click', function(evt) {
      evt._isSearch = true;
    });

    openBtn.addEventListener("click", function (evt) {
      this.disabled = true;

      if (
        !search.classList.contains(params.activeClass) &&
        !search.classList.contains(params.hiddenClass)
      ) {
        search.classList.add(params.activeClass);
      }
    });

    closeBtn.addEventListener('click', function () {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function (evt) {
      if (!evt._isSearch && search._isOpened) {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
      }
    });
  }

  setSearch({
    openBtnClass: "js-open-search", // класс кнопки открытия
    closeBtnClass: "js-close-search", // класс кнопки закрытия
    searchClass: "js-form", // класс формы поиска
    activeClass: "is-opened", // класс открытого состояния
    hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
  });
})();

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
