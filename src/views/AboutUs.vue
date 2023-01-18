<template>
  <hero-header
    slotClass=" flex items-start lg:pl-40 pl-4 flex-col lg:pt-20   h-full"
    className="h-36 lg:h-full items-start"
    :bgImg="MbHero"
  >
    <div class="relative  space-y-2 lg:space-y-5">
      <h1 class="text-white font-semibold text-xl lg:text-4xl">About Us</h1>
      <hr class="text-4xl text-[#2BCF98] border-[#2BCF98] w-[60px] bg-[#2BCF9B] h-[3px]" />
    </div>

    <div class="flex items-center lg:pt-20 text-lg gap-2 lg:pb-3 w-full h-full">
      <p class="text-[#2BCF9B]  text-[10px] lg:text-base font-semibold">Trashin</p>
      <Icon
        icon="material-symbols:keyboard-double-arrow-right"
        class="text-[#2BCF9B]  text-base  lg:text-xl"
      />

      <p class="font-semibold text-[10px] lg:text-base text-white">About Us</p>
    </div>
  </hero-header>

  
  
  <!---------------  Our Vision   ------------------------>
  
  <div class="lg:pt-32 pb-8 lg:pb-20">
    
    <OurVision/>
  </div>
  
  
  <!---------------- Art Board  --------------------->
  <div class="relative  lg:pb-20">
    <img :src="Artboard" alt="" class="w-full hidden lg:block">
    <img :src="MobArtboard" alt="" class="w-full lg:hidden ">
  </div>
  
  
  <!------------- Our Mission  --------------------------->
  
  <div class="relative pt-5 lg:pt-20 ">
    
    
    
    <OurMission/>
  </div>
  
  <!----------- Our Team  -------------->
  
  <div class="lg:pt-40  pt-5 lg:pb-20 ">
    <OurTeam/>
    
  </div>
<!----------- Our Investors  -------------->

<div class="lg:pt-40 pt-12 pb-8 lg:pb-20 ">
    <OurInvestors/>

</div>

<!----------------- Sub Footer  ------------------>
<div class="">

<SubFooter/>
</div>

<!--------------- Global Footer ----------- -->
<GlobalFooter/>

</template>

<script>
import HeroHeader from "../components/ui/HeroHeader.vue";
import OurVision from "../components/aboutus/OurVision.vue";
import Artboard from '../assets/img/artboard.svg'
import MobArtboard from '../assets/img/mobArtboard.svg'

import OurMission from "../components/aboutus/OurMission.vue";
import OurInvestors from "../components/aboutus/OurInvestors.vue";

import OurTeam from '../components/aboutus/OurTeam.vue'

import SubFooter from "../components/footer/SubFooter.vue";
import GlobalFooter from "../components/footer/GlobalFooter.vue";

import MbHero from  '../assets/img/contactMobHeroBg.svg'

export default {
  components: {
    "hero-header": HeroHeader,
    OurVision,
    OurMission,
    OurTeam,
    OurInvestors,
    SubFooter,
    GlobalFooter
    
  },
  mounted(){
window.scrollTo(0,0)
  },
  data() {
    return {
      MbHero,
      MobArtboard,
        Artboard
    }
  },
};
</script>
