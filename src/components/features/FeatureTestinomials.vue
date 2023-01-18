<template>
  <div class="text-center space-y-3">
    <h2 class="text-center font-semibold text-[11px]  lg:text-lg text-[#009368]">
      Testimonials
    </h2>

    <h1 class="font-semibold text-lg lg:text-3xl text-[#213430]">
      What People Say about Our <br />
      SpotPe Features
    </h1>
    <hr class="text-4xl text-[#2BCF98] w-14 bg-[#2BCF9B] h-1 m-auto" />
  </div>
  <div class="m-auto h-full" id="app">
 
    <swiper
    
    :cssMode="true"
    :breakpoints="{
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }"
    :navigation="true"
    :pagination="{ clickable: true }"
    :mousewheel="true"
    :space-between="0"
    :keyboard="true"
    :modules="modules"
    id="mySlider"
    class="mySwiper rounded-full lg:w-[95%]  h-64   lg:h-80"
  >
  <swiper-slide class="flex px-12" v-for="item in  testiData" :key="item.id" >
    <div
        class="m-auto bg-white drop-shadow-lg shadow-lg rounded-lg  w-full px-6 py-5 lg:py-9 space-y-3"
         
      >
        <div class="flex">
          <ul v-for="item in stars" :key="item">
            <Icon :icon="item" class="text-yellow-500 text-xl" />
          </ul>
        </div>
        <div class="space-y-3" >
          <p class="text-[#6F7775] text-[10px] lg:text-sm">{{ item.sub }}</p>
          <div class="flex gap-4">
            <img :src="item.img" alt="" />
            <div class="  ">
              <h1 class="text-[#6F7775] text-[10px] lg:text-base font-medium">{{ item.name }}</h1>
              <p class=" text-[10px] lg:text-sm text-[#009368] font-medium max-w-max lg:w-max">
               {{ item.role }}
              </p>
            </div>
          </div>
        </div>
      </div>

</swiper-slide>
  </swiper>


 

</div>
  
 
</template>



<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import Img1 from "../../assets/img/testimonial/pic1.svg";
import {ref} from 'vue'

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Mousewheel, Keyboard],
      stars:ref([
        "ic:round-star",
        "ic:round-star",
        "ic:round-star",
        "ic:round-star",
        "ic:round-star"
      ]),
      testiData:ref(
      [
        {
          id: "1",
          sub: "SpotPe is a mind-blowing concept. Helping me run my business without money problem.",
          img: Img1,
          name: "Swaroop K M",
          role: "Founder /Dhanriddhi Enterprises"
        },
        {
            id:'2',
            sub:"Great Service, really supportive team. they are helping us manage our business better.",
            img:Img1,
            name:'Azhar',
            role:'CEO /Baatliwala'
        },
        {
            id:'3',
            sub:'Trashin has provided exceptional services as part of our ITC WOW Project.',
            img:Img1,
            name:'Afzar',
            role:'Project Manager /ITC'
        },
        {
            id:'3',
            sub:'Trashin has provided exceptional services as part of our ITC WOW Project.',
            img:Img1,
            name:'Afzar',
            role:'Project Manager /ITC'
        },
        {
            id:'3',
            sub:'Trashin has provided exceptional services as part of our ITC WOW Project.',
            img:Img1,
            name:'Afzar',
            role:'Project Manager /ITC'
        },
        {
            id:'3',
            sub:'Trashin has provided exceptional services as part of our ITC WOW Project.',
            img:Img1,
            name:'Afzar',
            role:'Project Manager /ITC'
        },
      
      ])

    };
  },
};
</script>
 


 


 