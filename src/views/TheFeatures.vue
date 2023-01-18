<template>
  <div class="h-full">
    <!--------------------- Hero Header -------------------  -->
    <hero-header className="h-screen" slotClass=" lg:flex flex-col lg:pt-10 items-center  h-full">
      <div class="flex flex-col lg:flex-row items-center relative lg:justify-center">
        <div class="text-white space-y-4">
          <h1 class="font-bold text-center lg:text-start text-xs lg:text-lg text-[#009368]">Feature Page</h1>
          <h1 class="font-bold text-2xl text-center lg:text-start  lg:text-5xl">
            {{ title }}
          </h1>
          <hr class="text-4xl m-auto lg:m-0 text-[#2BCF98] border-[#2BCF98] w-12 bg-[#2BCF9B] h-0.5" />
          <p class="text-center lg:text-start  text-xs lg:text-[20px] w-80  lg:w-[550px]   lg:leading-snug " style="line-height:26px">'{{ subtitle }}'</p>
          <div class="flex items-center justify-center lg:justify-start gap-4  lg:gap-7">
            <slot></slot>
          </div>
        </div>
        <img :src="heroImg" alt="" :class="` ${imgClass}  pt-5 lg:pt-0 lg:w-[40%]    `" />
      </div>

    </hero-header>

    <div class=" lg:w-screen master h-full bg-top-bottom  bg-no-repeat bg-cover" >

  <!-------------- Background Grid  -------------------------->

<!-- <img :src="heroBg" alt="" class="absolute"> -->





<!-- -------------------- Head Bar  -------------------- -->

<div class="absolute  -bottom-56 lg:-bottom-20 w-full">
  
  <HeadBar :headData="headData" />
</div>


<!-------------- About Feature  ---------------- -->
<div class="mb-20 mt-60 px-6 lg:px-0 lg:mt-52  ">
  
  <AboutFeature :dataSet="dataSet" />
</div>

<!---------------------- Feature Testinomial ---------------- -->
<div class="mb-10">
  
  <FeatureTestinomials/>
</div>
</div>


<!----------------- Sub Footer  ------------------>
<div class="">

  <SubFooter/>
</div>

<!--------------- Global Footer ----------- -->
<GlobalFooter/>


  </div>
</template>

<script>
import HeroHeader from "../components/ui/HeroHeader.vue" 

import HeadBar from "../components/features/HeadBar.vue";
import AboutFeature from '../components/features/AboutFeature.vue'
import FeatureTestinomials from "../components/features/FeatureTestinomials.vue";
import HeroBg from '../assets/img/bg/heroBg.svg'
import SubFooter from "../components/footer/SubFooter.vue";
import GlobalFooter from "../components/footer/GlobalFooter.vue";
import MasterBg from '../assets/img/masterBg.png'


export default {
  components: {
    "hero-header": HeroHeader,
    HeadBar,
    AboutFeature,
    FeatureTestinomials,
    SubFooter,
    GlobalFooter,
    HeroBg,
  },
  mounted(){
window.scrollTo(0,0)
  },
  props: ["title", "subtitle", "heroImg",'headData','dataSet', 'imgClass'],
  data() {
    return {
      MasterBg
    };
  }
};
</script>


<style scoped>
@media screen and (min-width: 1042px) {
  .master {
    background-image: url("../assets/img/masterBg.png");
  }
}
</style>