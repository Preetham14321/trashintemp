<template>
  <hero-header
    slotClass=" flex items-start  lg:pl-40 flex-col  pl-4     lg:pt-20   lg:h-full"
    className="  h-36 lg:h-full lg:items-start"
    :bgImg="MbHero"
  >
    <div class="relative  lg:h-full space-y-2 lg:space-y-5">
      <h1 class="text-white font-semibold text-lg lg:text-4xl">Contact Us</h1>
      <hr class="text-4xl text-[#2BCF98]  border-[#2BCF98] w-[40px] lg:w-[60px] bg-[#2BCF9B] h-[3px]" />
    </div>

    <div class="flex items-center pt-9 lg:pt-20 text-lg lg:gap-2 lg:pb-3 w-full lg:h-full">
      <p class="text-[#2BCF9B] text-[10px] lg:text-base font-semibold">Trashin</p>
      <Icon
        icon="material-symbols:keyboard-double-arrow-right"
        class="text-[#2BCF9B] text-base lg:text-xl"
      />

      <p class="font-semibold text-[10px] lg:text-base text-white">Contact Us</p>
    </div>
  </hero-header>

  <div class="flex flex-col lg:flex-row lg:justify-evenly   lg:pt-24  items-start">
    <div class=" space-y-2 lg:space-y-4 px-5 lg:px-0 ">
      <h1 class="font-semibold text-[11px] lg:text-lg pt-3 lg:pt-0 text-[#009368]">Contact Us</h1>

      <p class="text-[#213430] font-semibold text-lg lg:text-4xl">Get in Touch</p>

      <hr class="text-4xl text-[#2BCF98] w-[40px] lg:w-[60px] bg-[#2BCF9B] h-[3px]" />
      <p class="text-[#6F7775] text-sm lg:text-base">
        We are building relationships with new customers and partners throughout
        <br class="hidden lg:block" />
        the globe. The use cases for our work are mysterious. If you have the
        <br class="hidden lg:block"  />
        slightest question, please contact us because you never know how you
        <br class="hidden lg:block" />
        might find our product valuable.
      </p>

      <div class="lg:space-y-5 grid grid-cols-2 gap-y-4 pt-2 lg:pt-0 lg:gap-y-0 items-center justify-center lg:grid-cols-1 ">
        <ul
          v-for="item,key in contactDetails"
          :key="item.id"
          class="flex  gap-3 lg:gap-5 items-center"
        >
          <img :src="item.icon" alt="" class="w-10 lg:w-full " />

          <div class="">
            <h1 class="font-semibold text-[10px] lg:text-lg text-[#213438]">
              {{ item.title }}
            </h1>
            <p :class=" ` ${key>1?'w-60':''}   lg:w-[32rem] text-[#6F7775] text-[9px] lg:text-base 1  `">{{ item.subtitle }}</p>
          </div>
        </ul>
      </div>
    </div>
    
    
    
    
    <!------------------- Contact Form  ------------>
    <ContactForm/>
  </div>
<!-- </div> -->


<!---------------- Sub Footer ---------------- -->

<div class="lg:pt-10">

    <SubFooter/>
</div>

<!------------------ Global Footer  --->
<div class="w-full">

    <GlobalFooter/>
</div>
</template>

<script>
import HeroHeader from "../components/ui/HeroHeader.vue";

import EmailIcon from "../assets/icons/email.svg";
import PhoneIcon from "../assets/icons/phone.svg";
import PinIcon from "../assets/icons/pin.svg";
import ContactForm from "../components/contact/ContactForm.vue";
import SubFooter from "../components/footer/SubFooter.vue";
import GlobalFooter from "../components/footer/GlobalFooter.vue";
import MbHero from  '../assets/img/contactMobHeroBg.svg'


export default {
  components: {
    "hero-header": HeroHeader,
    ContactForm,
    SubFooter,
    GlobalFooter
  },
  mounted(){
window.scrollTo(0,0)
  },
  data() {
    return {
      MbHero,
      contactDetails: [
        {
          id: "1",
          icon: PhoneIcon,
          title: "Call Us",
          subtitle: "02248966222",
        },
        {
          id: "1",
          icon: EmailIcon,
          title: "Mail Us",
          subtitle: "support@trashin.com",
        },
        {
          id: "1",
          icon: PinIcon,
          title: "Visit Us",
          subtitle:
            "TrashIn Recycling Pvt Ltd, 711, 8th Main Rd, HAL 2nd Stage,Indiranagar, Bengaluru - 560034",
        },
      ],
    };
  },
};
</script>
