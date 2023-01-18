<template>
  <main class="bg-[#111111]">
    <div
      class="w-full h-full py-5 lg:py-20 flex flex-col lg:flex-row lg:gap-20 justify-center"
    >
      <img :src="HeroLogo" alt="" class="hidden lg:block" />

      <!-------------- Section-1 for Desktop View --------------- -->
      <div class="space-y-4 hidden lg:block">
        <img :src="MainLogo" alt="" />

        <h2 class="text-white">Get new information about Trashin</h2>
        <div class="bg-white flex p-1 rounded-lg w-full">
          <input
            type="email"
            class="focus:outline-0 w-48"
            placeholder="Type your email "
          />
          <button
            class="bg-[#2BCF9B] text-white px-6 font-medium py- rounded-md text-sm"
          >
            Subscribe
          </button>
        </div>
        <div class="flex gap-2">
          <ul v-for="item in socialIcons" :key="item.id">
            <a :href="item.link" target="_blank">
              <Icon
                :icon="item.icon"
                class="font-bold text-[#2BCF9B] text-2xl"
              />
            </a>
          </ul>
        </div>
      </div>

      <!-------------------- Company  ----------------->

      <div class="text-white m-auto lg:m-0">
        <h1 class="font-semibold text-base lg:text-lg pb-2">Company</h1>
        <ul class="pb-2 lg:pb-1" v-for="item in company" :key="item.id">
          <router-link :to="item.link">
            <li
              class="font-medium text-sm lg:text-base text-center lg:text-start"
            >
              {{ item.title }}
            </li>
          </router-link>
        </ul>
      </div>

      <!----------------------- Our Offerings ---------------------->

      <div class="text-white m-auto  py-5 lg:py-0 lg:m-0">
        <h1 class="font-semibold text-base lg:text-lg pb-2">Our Offerings</h1>
        <ul class="pb-2 lg:pb-1" v-for="item in ourOffering" :key="item.id">
          <router-link :to="item.link">
            <li
              class="font-medium text-sm lg:text-base text-center lg:text-start"
            >
              {{ item.title }}
            </li>
          </router-link>
        </ul>
      </div>

      <!---------------------------  Address  ---------------------->

      <div class="text-white ">
        <h1 class="font-semibold text-center lg:text-start pb-2">
          Trashin Recycling Private Limited
        </h1>
        <p class="text-sm lg:text-base text-center lg:text-start">
          #711, 8th Main Road, HAL 2nd Stage, Off 80 ft <br />
          Road, Indiranagar, Bengaluru - 38
        </p>
        <div class=" gap-3 hidden lg:flex pt-16">
          <ul v-for="item in store" :key="item.id">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" alt="" />
            </a>
          </ul>
        </div>
      </div>
    </div>

    <!-------------- Section-1 for Mobile  View --------------- -->
    <img :src="MobMainLogo" alt="" class="lg:hidden py-2 w- m-auto" />

    <div class="space-y-4 lg:hidden">
      <img :src="MainLogo" alt=""  class="w-28 m-auto" />

      <h2 class="text-white text-sm text-center ">Get new information about Trashin</h2>
      <div class="bg-white flex p-1 rounded-lg w-72 m-auto  ">
        <input
          type="email"
          class="focus:outline-0 w-40"
          placeholder="Type your email "
        />
        <button
          class="bg-[#2BCF9B] text-white px-6 font-medium py- rounded-md text-sm"
        >
          Subscribe
        </button>
      </div>
      <div class="flex gap-2 justify-center">
        <ul v-for="item in socialIcons" :key="item.id">
          <a :href="item.link" target="_blank">
            <Icon :icon="item.icon" class="font-bold text-[#2BCF9B] text-2xl" />
          </a>
        </ul>
      </div>
    </div>

    <!-------------  Mobile View Play Icons ---------- -->
    <div class="  flex lg:hidden justify-center gap-4  pt-5 pb-12 ">
          <ul v-for="item in store" :key="item.id" class=" ">
            <a :href="item.link" target="_blank">
              <img :src="item.icon" alt="" class="w-28 m-au to" />
            </a>
          </ul>
        </div>

    <h1 class="text-white text-sm lg:text-base font-bold pb-2 text-center">
      Privacy Policy | Terms of Use
    </h1>

    <div class="bg-[#009368] w-full py-2 lg:py-4">
      <h1 class="text-center text-white text-[10px] lg:text-base font-medium">
        © 2022 Trashin Recycling Private Limited. All Rights Reserved.
      </h1>
    </div>
  </main>
</template>

<script>
import HeroLogo from "../../assets/img/footer/herologo.svg";
import MobMainLogo from "../../assets/img/mobHeroBg.svg";
import MainLogo from "../../assets/img/herologo.svg";
import Appstore from "../../assets/img/App_store_icon.png";

import Googlestore from "../../assets/img/google_icon.png";
export default {
  data() {
    return {
      HeroLogo,
      MainLogo,
      MobMainLogo,

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
      store: [
        {
          id: "1",
          icon: Googlestore,
          link: "https://play.google.com/store/apps/details?id=com.trashin.app",
        },
        {
          id: "2",
          icon: Appstore,
          link: "https://play.google.com/store/apps/details?id=com.trashin.app",
        },
      ],

      company: [
        {
          id: "1",
          title: "About Us",
          link: "/aboutus",
        },
        {
          id: "2",
          title: "Careers",
          link: "",
        },
        {
          id: "3",
          title: "Blog",
          link: "",
        },
        {
          id: "4",
          title: "Contact us",
          link: "/contactus",
        },
        {
          id: "5",
          title: "Chat with us",
          link: "",
        },
      ],
      ourOffering: [
        {
          id: "1",
          title: "Listing",
          link: "/features/listing",
        },
        {
          id: "2",
          title: "Bidding",
          link: "/features/bidding",
        },
        {
          id: "3",
          title: "SpotPe",
          link: "/features/spotpe",
        },
        {
          id: "4",
          title: "EPR",
          link: "",
        },
      ],
    };
  },
};
</script>
