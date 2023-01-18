<script>
import HeroLogo from "../../assets/img/webIcon.svg";
import GooglePlay from "../../assets/icons/googleplay.svg";
import ApplePlay from "../../assets/icons/appleplay.svg";
import FeaturesDrop from "./FeaturesDrop.vue";
import NavCard from "./NavCard.vue";
export default {
  components: {
    FeaturesDrop,
    NavCard,
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
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
    openDrawer(){
      this.drawer=!this.drawer
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
      HeroLogo,
      GooglePlay: GooglePlay,
      ApplePlay: ApplePlay,
      dropOpen: false,

      socialIcons: [
        {
          id: "1",
          icon: "mdi:twitter",
          link: "https://twitter.com/trashinofficial",
        },
        {
          id: "2",
          icon: "mdi:instagram",
          link: "https://www.instagram.com/trashin.recycling/",
        },
        {
          id: "3",
          icon: "typcn:social-facebook",
          link: "https://www.facebook.com/trashin.recycling",
        },
        {
          id: "4",
          icon: "ri:youtube-fill",
          link: "https://www.youtube.com/@trashinrecycling5346",
        },
        {
          id: "5",
          icon: "ci:linkedin",
          link: "https://www.linkedin.com/company/6647992/admin/",
        },
      ],
      items: [
        {
          title: "Foo",
          value: "foo",
        },
        {
          title: "Bar",
          value: "bar",
        },
        {
          title: "Fizz",
          value: "fizz",
        },
        {
          title: "Buzz",
          value: "buzz",
        },
      ],
    };
  },
};
</script>

<template>
  <div
    :class="` ${
      dropOpen ? '' : 'hidden'
    } z-0 absolute bg-gradient-to-b from-[rgba(29,28,28,0.69)] to-[rgba(31,30,30,0)] w-screen h-screen`"
    @click="toggleDrop"
    
  ></div>

  <div class="z-10">
    <!-- ------------------- Top Header ----------------------- -->

    <div
      class="bg-[#009368] hidden lg:flex items-center justify-around w-full text-white h-10 z-10"
      @click="toggleDrop"
    >
      <div class="flex items-center gap-4">
        <div class="flex gap-1 items-center"> 
          <Icon icon="ic:baseline-local-phone" class="font-bold text-lg"  />
          <p class="text-sm font-semibold">+02248966222</p>
        </div>
        <div class="flex gap-1 items-center">
          <Icon icon="mdi:email" class="text-lg" />
          <p class="font-semibold text-sm">support@trashin.com</p>
        </div>
      </div>

      <div class="flex gap-2">
        <ul v-for="item in socialIcons" :key="item.id">
          <a :href="item.link" target="_blank">
            <Icon :icon="item.icon" class="font-bold text-lg" />
          </a>
        </ul>
      </div>
    </div>

    <!-- ------------------- Main Header For Desktop View --------------------------------- -->

    <div
      :class="` hidden  lg:flex lg:flex-row items-center justify-center relative  text-white lg:gap-24 space-x-3 w-full pt-5  bg-gradient-to-b from-[rgba(0,0,0,0.69)] to-[rgba(31,30,30,0)]`"
    >
      <NavCard />

      <router-link to="/#download">
        <div class="flex gap-3 items-center border border-white rounded-lg p-2">
          <img :src="GooglePlay" alt="" />
          <img
            :src="ApplePlay"
            alt=""
            class="border-l px-2 border-[hsla(0,0%,74%,0.5)]"
          />
          <p class="font-semibold text-white text-sm">Download Now</p>
        </div>
      </router-link>
    </div>
  </div>

  <!-- ------------------- Main Header For Mobile  View --------------------------------- -->

    <div>
      <div
        color="black"
        class="flex items-center py-3 bg-black lg:hidden z-20 fixed border-b-2 w-full border-[#393939]"
        prominent
      >
        <Icon icon="charm:menu-hamburger" class="text-2xl text-white mx-3" v-if="!drawer" @click="openDrawer" />
        <Icon icon="ri:close-fill" class="text-2xl text-white mx-3"  @click="openDrawer"   v-else />

        <router-link to="/">
          <img :src="HeroLogo" alt="" class=" " />
        </router-link>
        <router-link to="/#download">
          <div
            class="flex gap-2 absolute top-4 float-right right-4 items-center p-1 px-2 rounded-md"
            style="border: 1px solid #fff"
          >
            <img :src="GooglePlay" alt="" class="w-3" />
            <img
              :src="ApplePlay"
              alt=""
              class="border-l w-6 px-1 border-[hsla(0,0%,74%,0.5)]"
            />
            <p class="font-semibold text-white text-[9px]">Download Now</p>
          </div>
        </router-link>
      </div>
    </div>

      <div class="px-4   pb-4 fixed w-full z-20 top-14 bg-[#2D2D2D] navigation-bar" v-if="drawer">
        <NavCard />
      </div>
</template>


<style scoped>

.navigation-bar {
  transition: transform 3s ease-out;
}</style>
