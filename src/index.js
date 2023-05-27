import Swiper from 'swiper/swiper-bundle';
// import Swiper and modules styles
import 'swiper/swiper-bundle.css';

// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

const swiper = new Swiper('.swiper', {
  // Optional parameters

  // autoplay: {
  //   delay: 2000,
  //   disableOnInteraction: false,
  // },
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  autoHeight: false,
  centeredSlides: true,
  slidesPerView: 4,
  // speed: 6000,
  // mousewheel: true,
  loop: true,
  rewind: true,
  spaceBetween: 20,
  autoHeight: true,
  // pauseOnMouseEnter: true,
  // grabCursor: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
