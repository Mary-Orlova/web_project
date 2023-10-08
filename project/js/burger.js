(() => {
  function setBurger(params) {
    const btn = document.querySelector(`.${params.btnClass}`);
    const menu = document.querySelector(`.${params.menuClass}`)
    const links = menu.querySelectorAll(`.${params.linksClass}`);

    function onBtnClick () {
      if (window.getWindowWidth() <= window.TABLET_WIDTH) {
      btn.classList.toggle(params.activeClass);

      if (
        !menu.classList.contains(params.activeClass) &&
        !menu.classList.contains(params.hiddenClass)
      ) {
        menu.classList.add(params.activeClass);
        document.body.style.overflow = 'hidden';
        btn.setAttribute('aria-label', 'Закрыть главное меню');
      } else {
        menu.classList.add(params.hiddenClass);
        document.body.removeAttribute('style');
        btn.classList.toggle(params.hiddenClass);
        btn.setAttribute('aria-label', 'Открыть главное меню');
      }

   }
    }

    menu.addEventListener("animationend", function () {
      if (this.classList.contains(params.hiddenClass)) {
        this.classList.remove(params.activeClass);
        this.classList.remove(params.hiddenClass);
        btn.classList.remove(params.hiddenClass);
      }
    });

    btn.addEventListener("click", window.debounce(onBtnClick, 500));
    links.forEach((links) => {
      links.addEventListener("click", window.debounce(onBtnClick, 500))
    });
  }

  setBurger({
    btnClass: "js-burger",
    menuClass: "js-menu-wrap",
    activeClass: "is-opened",
    hiddenClass: "is-closed",
    linksClass: "js-menu-link"
  });
  })();
