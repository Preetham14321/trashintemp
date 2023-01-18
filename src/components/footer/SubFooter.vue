<template>
  <main
    class=" h-screen lg:h-[65vh] w-[100vw] bg-center bg-no-repeat bg-cover"
    
  >
    <div
      class="text-white flex flex-col pt-28 lg:pt-0 lg:justify-center m-auto w-full lg:relative lg:left-80 space-y-2 h-full"
    >
      <h1 class="font-semibold text-xl text-center lg:text-start lg:text-3xl">
        Get Started with TrashIn now
      </h1>
      <p class="font-semibold text-sm text-center lg:text-start lg:text-lg">
        All your recycling needs in one place
      </p>
      <hr
        class="text-4xl text-[#2BCF98] m-auto lg:m-0 w-12 bg-[#2BCF9B] h-[3px] float-left"
      />

      <div class="flex items-center m-auto lg:m-0 gap-4 lg:gap-7">
        <ul v-for="item in store" :key="item.id">
          <a :href="item.link" target="_blank">
            <img :src="item.icon" alt=""  class="w-28 lg:w-full" />
          </a>
        </ul>
      </div>
    </div>
  </main>
</template>

<script>
import BgImg from "../../assets/img/footer/footerBg.jpg";
import Appstore from "../../assets/img/App_store_icon.png";
import Googlestore from "../../assets/img/google_icon.png";

export default {
  data() {
    return {
      BgImg,
      Appstore,
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
    };
  },
};
</script>


<style scoped>
  @media screen and (min-width: 1042px) {
    main {
      background-image: url('../../assets/img/footer/footerBg.jpg');
  }
}
  @media screen and (max-width: 600px) {
    main {
      background-image: url('../../assets/img/footer/mobFooterBg.svg');
  }
}




</style>