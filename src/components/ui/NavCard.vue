<script>
import HeroLogo from "../../assets/img/webIcon.svg";
import GooglePlay from "../../assets/icons/googleplay.svg";
import ApplePlay from "../../assets/icons/appleplay.svg";
import FeaturesDrop from "./FeaturesDrop.vue";
import MobileFeatureDrop from "./MobileFeatureDrop.vue";
export default {
  components: {
    FeaturesDrop,
    MobileFeatureDrop
  },
  watch: {
      group () {
        this.drawer = false
      },
    },
  data() {
    return {
      HeroLogo: HeroLogo,
      GooglePlay: GooglePlay,
      ApplePlay: ApplePlay,
      activeBar: "Home",
      dropOpen: false,
      navData: [
        {
          id: "1",
          name: "Home",
          link: "/",
          lineStyle:'-left-2'
        },
        {
          id: "2",
          name: "Features",
          link: "",
          lineStyle:'w-[70px]',
          dropIcon: [
            "material-symbols:keyboard-arrow-down-rounded",
            "material-symbols:keyboard-arrow-up-rounded",
          ],
        },
        {
          id: "3",
          name: "Impact",
          link: "/",
        },
        {
          id: "4",
          name: "Blog",
          link: "/",
          lineStyle:'-left-2'

        },
        {
          id: "5",
          name: "About Us",
          link: "/aboutus",
          lineStyle:'w-[70px]'
        },
        {
          id: "6",
          name: "Contact Us",
          link: "/contactus",
          lineStyle:'w-[80px]'
        },
      ],

     
      drawer: false,
      group: null,
       
    };
  },
  methods: {
    navigateToEnd() {
      var section = this.$router.currentRoute.value.hash.replace("#", "");
      if (section)
        this.$nextTick(() =>
          window.document.getElementById(section).scrollIntoView()
        );
    },
    // mounted() {
    //   // var section=this.$router.currentRoute.value.hash.replace("#", "");
    //   // if (section)
    //   this.$nextTick(() =>
    //     window.document.getElementById("impact").scrollIntoView()
    //   );
    // },
    generateParam(){
      console.log('url',this.$route.path)

    },
    activeTabHandle(id) {
    
      this.activeBar = id;
      if (id == "Features") {
        this.dropOpen = !this.dropOpen;
      } else {
        this.toggleDrop();
      }
    },
    toggleDrop() {
      this.dropOpen = false;
    },
  },
};
</script>







<template>
    <div
    :class="` ${
      dropOpen ? 'top-0 ' : 'hidden'
    } z-20  absolute bg-gradient-to-b from-[rgba(29,28,28,0.69)] to-[rgba(31,30,30,0)] lg:w-screen  h-screen`"
    @click="toggleDrop"
  ></div>
  <router-link to="/"> <img :src="HeroLogo" alt="" class="hidden lg:block w-32" />
  </router-link>
  <div class="flex   flex-col lg:flex-row lg:gap-14 relative ">

  <ul v-for="item in navData" :key="item.id" class="">

       <router-link :to="item.link" >
         <div
           class="flex flex-col lg:flex-row  gap-x-1 py-2 lg:py-0 lg:-pb-0 lg:relative lg:items-center  cursor-pointer"
           @click="activeTabHandle(item.name)"
         >
         <hr :class="`text-4xl   ${item.lineStyle}  ${
               activeBar == item.name ?'absolute -top-[35px] border border-[#2BCF98] -left text-[#2BCF98] w-[60px] bg-[#2BCF9B] hidden lg:block h-1':'hidden' } `" />
          <div class="flex items-center">

          <li
             :class="`font-semibold   ${
               activeBar == item.name ? 'text-[#2BCF9B]  '  : 'text-white'
             } text-[15px] lg:text-base`"
              @click="navigateToEnd()"
           >
             {{ item.name }}
           </li>
           <div class="flex flex-1 lg:hidden"></div>
           <Icon
             :icon="`${
               dropOpen
                 ? 'material-symbols:keyboard-arrow-up-rounded'
                 : 'material-symbols:keyboard-arrow-down-rounded'
             }`"
             :class="`${
               item.name == 'Features' ? 'text-lg font-bold' : 'hidden'
             } ${dropOpen ? 'text-[#2BCF9B]' : 'text-white'}  `"
           />
          </div>

         </div>
       </router-link>

       <div class="lg:absolute lg:z-20 lg:top-7" @click="toggleDrop">
         <FeaturesDrop
           :class="`  ${
             item.name == 'Features' && dropOpen ? ' hidden lg:block absoulte' : 'hidden'
           }  `"
         />
         <MobileFeatureDrop
           :class="`  ${
             item.name == 'Features' && dropOpen ? ' relative lg:hidden ' : 'hidden'
           }  `"
         />
       </div>
    </ul>
</div>
</template>