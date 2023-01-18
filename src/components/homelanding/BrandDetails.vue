<template>
     <div
    class="relative flex flex-col lg:flex-row   mx-7 m-auto lg:mx-0 z-0 lg:pl-56"
  >
   <div class="mb-3 lg:mb-0 lg:absolute w-full -top-20 -right-[51rem] mx-auto ">
      <swiper
        :centeredSlides="true"
        :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }"
        :pagination="false"
        :navigation="false"
        :modules="modules"
        class="m-auto  "
      >
        <swiper-slide class="flex" v-for="item in caroImg" :key="item">
          <div class="d-flex fill-height justify-center align-center">
            <img :src="item" alt="" class="w-[284px] lg:w-[450px] lg:h-full" />
          </div>
        </swiper-slide>
      </swiper>

    </div>

    <div
      class="lg:justify-start lg:m-auto flex flex-col-reverse lg:flex-row relative w-full z-10"
    >
      <div
        class="bg-white   drop-shadow-lg shadow-lg rounded-2xl w-68 m-auto lg:m-0 lg:w-[640px] p-5 lg:p-8 space-y-3"
      >
        <h1
          class="font-semibold text-lg lg:text-4xl m-auto lg:m-0 w-max text-[#0f1312]"
        >
          EPR for Brands
        </h1>
        <hr
          class="text-[#2BCF98] w-[40px] lg:w-[60px] m-auto lg:m-0 bg-[#2BCF9B] h-0.5 lg:h-1"
        />

        <p
          class="text-[#6F7775] m-auto lg:m-0 text-center lg:text-start text-[10px] lg:text-base"
        >
          Meet your Extended Producer Responsibility <br class="lg:hidden" />
          goals, hassle-free, with
          <br class="hidden lg:block" />
          geo-tagged photos <br class="lg:hidden" />
          and documents from your sellers - all in one <br />
          place!
        </p>
        <div class="">
          <router-link to="/contactus">
            <button
              class="bg-black m-auto lg:m-0 rounded-md text-white px-5 py-2 font-semibold text-xs lg:text-base flex items-center gap-2"
            >
              Contact Us
              <Icon
                class="text-xl"
                icon="material-symbols:arrow-right-alt-rounded"
              />
            </button>
          </router-link>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import { ref } from "vue";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./style.css";
import Caro1 from "../../assets/img/home/caro1.svg";
import Caro2 from "../../assets/img/home/caro2.svg";
import VideoImg from "../../assets/img/home/img.svg";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],

      caroImg: ref([Caro1, Caro2]),
      img: ref(VideoImg),
      title: ref("Impact First, Forever"),
    };
  },
};
</script>
<!-- 
<script>
import Caro1 from "../../assets/img/home/caro1.svg";
import Caro2 from "../../assets/img/home/caro2.svg";
import VideoImg from "../../assets/img/home/img.svg";
import {ref} from 'vue'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import {Autoplay, FreeMode, Pagination } from "swiper";

export default {
  modules: [FreeMode, Pagination,Autoplay],
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      caroImg: [Caro1, Caro2],
      img: VideoImg,
      title: "Impact First, Forever",
      
    };
  },
};
</script> -->
