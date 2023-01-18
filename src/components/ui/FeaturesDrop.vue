<template>
  <div :class="`w-60 px-3 bg-white z-20 drop-shadow-lg shadow-lg rounded-lg `">
    <ul
      v-for="(item, key) in featureData"
      :key="item.id"
      class="hover:bg-slate-100"
    >
      <router-link :to="item.link">
        <div
          :class="` ${
            key < 2 ? 'border-b-[5px]  ' : ''
          } py-3  z-20 flex gap-3  hover:bg-slate-100`"
        >
          <img :src="item.logo" alt="" class="w-14 h-14" />
          <div class="">
            <h1 class="font-semibold text-black text-sm">{{ item.title }}</h1>
            <p class="text-[#666363] text-[10px]">{{ item.subtitle }}</p>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import BiddingIcon from "../../assets/icons/Bidding_icon.png";
import ListingIcon from "../../assets/icons/Listing icon.png";
import SpotPeIcon from "../../assets/icons/SpotPe icon.png";

export default {
  props: {
    isDropOpen: false,
  },

  data() {
    return {
      featureData: [
        {
          id: "1",
          logo: ListingIcon,
          title: "Listing",
          subtitle:
            "Post your listing to discover bids from interested buyers and sell directly!",
          link: "/features/listing",
        },
        {
          id: "2",

          logo: BiddingIcon,
          title: "Bidding",
          subtitle:
            "View listings near you to place your bid and buy directly from interested sellers",
          link: "/features/bidding",
        },
        {
          id: "3",
          logo: SpotPeIcon,
          title: "SpotPe",
          subtitle: "Improve customer loyalty with seamless payments",
          link: "/features/spotpe",
        },
      ],
    };
  },
};
</script>
