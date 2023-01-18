<template>
  <div
    class="relative flex flex-col lg:flex-row mx-6 m-auto lg:mx-0 z-0 lg:pl-32"
  >
    <div class=" lg:absolute w-full -top-20 -right-[51rem] mx-auto">
      <img :src="OurMissionImg" alt="" class="w-[300px] lg:w-[500px] m-auto lg:m-0" />
    </div>

    <div
      class="lg:justify-start lg:m-auto flex flex-col-reverse lg:flex-row relative w-full z-10"
    >
      <div
        class="bg-white drop-shadow-lg shadow-lg rounded-2xl w-[300px] m-auto lg:m-0 lg:w-[740px] p-5 space-y-3"
      >
        <div class="w- bg-white lg:p-8 space-y-3">
          <h1 class="font-semibold text-lg lg:text-4xl lg:w-max text-[#0f1312]">
            Our Mission
          </h1>
          <hr
            class="text-4xl text-[#2BCF98] w-[40px] lg:w-[60px] bg-[#2BCF9B]  h-0.5 lg:h-1"
          />

          <p class="font-medium text-[10px] lg:text-base text-[#272727]">
            Empower the informal recycling value chain with technology.
          </p>
          <p class="text-[#272727] text-[10px] lg:text-base  lg:w-max">
            Between 1-2% of the global population subsists on waste. These
            climate warriors <br class="hidden lg:block" />
            live a life in constant fear of being exploited. Without access to
            basic <br class="hidden lg:block" />
            necessities. Barely making a humble living. We are here to transform
            their lives, <br class="hidden lg:block" />
            once and for all !
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- <div class="relative flex j pl-56">
      <div class="justify-start m-auto flex relative w-full z-10">
        <div class="w- bg-white p-8 space-y-3">
          <h1 class="font-semibold text-4xl w-max text-[#0f1312]">
            Our Mission
          </h1>
          <hr class="text-4xl text-[#2BCF98] w-[60px] bg-[#2BCF9B] h-1" />
  
          <p class="font-medium text-[#272727]">Empower the informal recycling value chain with technology.</p>
          <p class="text-[#272727]">
            Between 1-2% of the global population subsists on waste. These climate warriors <br> live a life in constant fear of being exploited. Without access to basic <br> necessities. Barely making a humble living. We are here to transform their lives, <br> once and for all !

          </p>
  
        
        </div>
      </div>
      <div class="  absolute  -top-20 right-56 mx-auto">
       <img :src="OurMissionImg" alt="" class="w-[500px]">
      </div>
    </div> -->
</template>

<script>
import OurMissionImg from "../../assets/img/ourMission.svg";

export default {
  data() {
    return {
      OurMissionImg,
    };
  },
};
</script>
