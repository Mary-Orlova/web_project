(() => {
  const swiper = new Swiper('.js-hero--slider', {
    // slidesPerView: 1,
    allowTouchMove: false,
    loop: true,
    effect: 'fade',
    speed: 10000,
    autoplay: {
      delay: 10000
    },

    pagination: {
      el: '.js-hero-pagination',
      clickable: true,
    },

    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    }
  });
})();

const gallerySlider = new Swiper(".js-gallery-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".js-gallery-pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".js-gallery-next",
    prevEl: ".js-gallery-prev",
    disabledClass: "navigation-btn_disabled"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  ally: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "-1";
        } else {
          slide.tabIndex = "";
        }
      });
    }
  }

})();
