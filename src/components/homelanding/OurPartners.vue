<template>

<h1 class="font-semibold text-[#213430] text-xl  lg:text-4xl text-center">Our Trusted Partners</h1>
<hr class="text-4xl text-[#2BCF98] border-[#2BCF98] w-[60px] bg-[#2BCF9B] h-0.5 my-2 m-auto " />


<swiper
:autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
   :breakpoints="{
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 5,
      spaceBetween: 40
    }
  }"
    :slidesPerView="5"
    :spaceBetween="0"
    :freeMode="true"
    :pagination="false"
    :modules="modules"
    class="  flex w-full"
  >
    <swiper-slide class="flex" v-for="item in  partnerImgs" :key="item" >

      <div class="d-flex fill-height justify-center align-center">
              <img :src="item" alt="" class="w-[450px] h-full" />
            </div>
    </swiper-slide>

  </swiper>
 
    
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";

import  "../../assets/styles/swiper.css"
import img1 from '../../assets/img/home/Our_Partner_Logo/1.svg'
import img2 from '../../assets/img/home/Our_Partner_Logo/2.svg'
import img3 from '../../assets/img/home/Our_Partner_Logo/3.svg'
import img4 from '../../assets/img/home/Our_Partner_Logo/4.svg'
import img5 from '../../assets/img/home/Our_Partner_Logo/5.svg'
import img6 from '../../assets/img/home/Our_Partner_Logo/6.svg'
import img7 from '../../assets/img/home/Our_Partner_Logo/7.svg'
import img8 from '../../assets/img/home/Our_Partner_Logo/8.svg'
import img9 from '../../assets/img/home/Our_Partner_Logo/9.svg'
import img10 from '../../assets/img/home/Our_Partner_Logo/10.svg'
import img11 from '../../assets/img/home/Our_Partner_Logo/11.svg'
import img12 from '../../assets/img/home/Our_Partner_Logo/12.svg'
import img13 from '../../assets/img/home/Our_Partner_Logo/13.svg'
import img14 from '../../assets/img/home/Our_Partner_Logo/14.svg'
import img15 from '../../assets/img/home/Our_Partner_Logo/15.svg'

export default {

  components: {
    Swiper,
    SwiperSlide,
  },
  
    data(){
        return {
  modules: [FreeMode, Pagination,Autoplay],

            partnerImgs : [
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
                img11,
                img12,
                img13,
                img14,
                img15,
            ]
        }
    }
}


</script>

 