(() => {
  const swiper = new Swiper('.js-hero-slider', {
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

(() => {
const gallerySlider = new Swiper(".js-gallery-slider", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".js-gallery-pagination",
    type: "fraction",
    clickable: false
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}'
  },

  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
    disabledClass: "swiper-button-disabled"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
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
});
})();



(() => {
  const eventsSwiper = new Swiper('.js-events-swiper', {

    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: ".events-next",
      prevEl: ".events-prev"
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    a11y: {
      paginationBulletMessage: 'Перейти к слайду {{index}}'
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40
      },
      680: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },
      1920: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });
})();

(() => {
  const eventsSlider = new Swiper('.js-partners-slider', {
    speed: 400,
    spaceBetween: 50,
    navigation: {
      nextEl: ".projects__next",
      prevEl: ".projects__prev"
    },
    autoplay: {
      delay: 1000,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    }
  });
})();
