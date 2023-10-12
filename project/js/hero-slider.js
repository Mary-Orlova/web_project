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
