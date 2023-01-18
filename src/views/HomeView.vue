<template>
  <div class="h-full overflow-x-hidden">
    <hero-header
      className=" h-screen"
      slotClass=" lg:flex flex-col lg:pt-10 lg:items-center  lg:h-full"
    >
      <div
        class="flex flex-col lg:flex-row items-center z-0 lg:justify-between relative"
      >
        <div class="text-white space-y-3 lg:space-y-5">
          <h1
            class="font-bold lg:text-left text-center text-2xl lg:text-5xl lg:leading-snug -z-10"
          >
            Empowering the <br />
            recycling value <br class="hidden lg:block" />
            chain
          </h1>
          <hr
            class="lg:hidden text-[#2BCF98] w-12 m-auto bg-[#2BCF9B] border-[#2BCF98] h-0.5"
          />
          <p
            class="text-center lg:text-start text-xs lg:text-[20px] lg:border-l-[3px] pl-3 border-[#2BCF9B] lg:leading-7"
          >
            We are eliminating the menace of waste with <br class="lg:hidden" />
            our network <br class="hidden lg:block" />
            centric b2b platform to discover, <br class="lg:hidden" />
            buy & sell recyclables!
          </p>
          <div class="flex justify-center lg:justify-start items-center gap-7">
            <img :src="Googlestore" alt="" class="w-24 lg:w-48" />
            <img :src="Appstore" alt="" class="w-24 lg:w-48" />
          </div>
        </div>
        <img :src="homeHero" alt="" class="w-64 pt-5 lg:pt-0 lg:w-[38%]" />
      </div>
    </hero-header>
    <!-- -------------------- Head Bar  -------------------- -->

    <div class="absolute -bottom-96 lg:-bottom-20  w-full">
      <HomeSubHeader />
    </div>

    <div
      class="lg:w-screen master lg:px-0 h-full bg-top-bottom bg-no-repeat bg-cover"
    >
      <!----------------- Our Features  ------------------->
      <div class="lg:mb-20 mt-[26rem] lg:mt-36">
        <OurFeatures />
      </div>

      <!---------------- Impact Details -------------------->

      <div id="impact" class="mt-10 lg:my-40">
        <Impact />
      </div>

      <!-------------- Brand Details  ------------------>
      <div class="my-10 w-full lg:my-40">
        <BrandDetails />
      </div>
      </div>
      <!---------------- Our Partners --------------------->

      <div class="lg:pb-20">
        <OurPartners />
      </div>

      <!----------------- Sub Footer  ------------------>
      <div class="" id="download">
        <SubFooter />
      </div>

      <!--------------- Global Footer ----------- -->
      <GlobalFooter />
    </div>
</template>

<script>
import HeroHeader from "../components/ui/HeroHeader.vue";
import Appstore from "../assets/img/App_store_icon.png";
import Googlestore from "../assets/img/google_icon.png";
import homeHero from "../assets/img/homeHero.svg";
import HomeSubHeader from "../components/homelanding/HomeSubHeadBar.vue";
import OurFeatures from "../components/homelanding/OurFeatures.vue";
import BrandDetails from "../components/homelanding/BrandDetails.vue";
import OurPartners from "../components/homelanding/OurPartners.vue";
import Impact from "../components/homelanding/Impact.vue";
import SubFooter from "../components/footer/SubFooter.vue";
import GlobalFooter from "../components/footer/GlobalFooter.vue";
import MasterBg from "../assets/img/masterBg.png";
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  components: {
    "hero-header": HeroHeader,
    HomeSubHeader,
    OurFeatures,
    BrandDetails,
    OurPartners,
    SubFooter,
    GlobalFooter,
    Impact,
  },
  // mounted() {
  //           var section=this.$router.currentRoute.value.hash.replace("#", "");
  //  console.log(section)
  //               this.$nextTick(()=> window.document.getElementById(section).scrollIntoView());
  //       },

  data() {
    return {
      Appstore,
      Googlestore,
      homeHero,
      MasterBg,
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1042px) {
  .master {
    background-image: url("../assets/img/masterBg.png");
  }
}
</style>
