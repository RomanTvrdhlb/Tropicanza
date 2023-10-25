import Swiper from 'swiper';
import { Navigation, Pagination, Grid, EffectCreative, EffectFade, Autoplay, Parallax } from 'swiper/modules';

import vars from "../_vars";
import {addCustomClass,removeCustomClass} from '../functions/customFunctions';

const {balanceSlider,ratingSliders, choiceSlider} = vars;
const bannerSlider = document.querySelector('.banners-slider');
if(bannerSlider){
  const swiper = new Swiper(bannerSlider, {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
    loop: true,
    allowTouchMove: false,
    effect: "fade",
    autoplay: {
      delay: 3000,
    },
      
    pagination: {
      el: '.banners-slider__pagination',
      type: "bullets",
      clickable: true,
    },
  });
  }

  