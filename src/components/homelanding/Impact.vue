<template>
  <div class=" ">
    <div class=" relative "   v-if="playVideo">
    

      <video
      autoplay
      controls
       
      loop
      id=" "
      class="fixed mr-[-50%] border-4 top-[50%] left-[50%] w-[70%]  z-10"
      style="transform: translate(-50%, -50%)"
      >
      <source :src="ImpactVideo" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  <Icon icon="ic:round-close" class="rounded-full text-2xl bg-white fixed mt-[5%] top-[2%] right-[16%]     z-20  "   @click="handlePlayVideo" id=" " />
</div> 

    <div class="flex flex-col lg:flex-row justify-center relative items-center lg:gap-32 lg:mt-40">
      <div class="relative">
        <img
          :src="PlayIcon"
          class="absolute mr-[-50%] top-[50%] left-[50%] w-20"
          alt=""
          @click="handlePlayVideo"
          style="transform: translate(-50%, -50%)"
        />
        <img :src="img" alt="" class="w-[280px] lg:w-[450px]" />
      </div>

      <div class=" p-2 my-3 lg:my-0 lg:p-0 space-y-2 drop-shadow-lg shadow-lg lg:shadow-none lg:drop-shadow-none  lg:space-y-3">
        <h1 class="text-[#213430] text-center lg:text-start font-semibold text-lg lg:text-4xl">
          {{ title }}
        </h1>
        <hr class=" text-[#2BCF98] border-[#2BCF98] m-auto lg:m-0 w-[60px] bg-[#2BCF9B] h-0.5" />
        <p class="text-[#6F7775] text-center lg:text-start text-[11px] lg:text-base">
          Being a part of this movement means you are <br class="lg:hidden"/> a part of something <br class="hidden lg:block" />
          special while we <br class="lg:hidden"/> transform the life of the marginalized who are <br class="lg:hidden"/> at
          <br class="hidden lg:block" />
          the forefront of the fight against waste and <br class="lg:hidden"/> climate change.
        </p>

        <button
          class="bg-black text-xs m-auto lg:m-0 lg:text-base rounded-md text-white px-5 py-2 font-medium lg:font-semibold flex items-center gap-2"
        >
          Know More
          <Icon
            class="text-xl"
            icon="material-symbols:arrow-right-alt-rounded"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VideoImg from "../../assets/img/home/img.svg";
import PlayIcon from "../../assets/img/Play_button_icon.png";
import ImpactVideo from "../../assets/video/impactVideo.mp4";

export default {
  data() {
    return {
      img: VideoImg,
      title: "Impact First, Forever",
      PlayIcon,
      playVideo: false,
      ImpactVideo,
    };
  },
  methods: {
    handlePlayVideo() {
      this.playVideo = !this.playVideo;
    },
  },
};
</script>

<style scoped>
#myVideo {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
}
#close {
  position: fixed;
  bottom: 0;
  right:0;
  background: rgba(0, 0, 0, 0.5);
  color: #f1f1f1;
   top:0;
   
}
</style>
