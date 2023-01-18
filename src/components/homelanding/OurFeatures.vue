<template>
  <div class="w-full">
    <h1 class="font-semibold text-xl lg:text-4xl text-[#213430] text-center">
      Our Features
    </h1>
    <hr
      class="text-4xl text-[#2BCF98] w-[60px] bg-[#2BCF9B] h-1 text-center m-auto my-4"
    />

    <div class="grid lg:grid-cols-3 justify-center items-center lg:px-52">
      <div v-for="item in featureData" :key="item.id">
        <router-link :to="item.link">

          <!-------------- For Desktop View  --------------->
          <div
            class="m-auto bg-white hidden lg:flex flex-col py-10 justify-center shadow-lg drop-shadow-md hover:border-[#2BCF9B] hover:border-2 items-center w-60 lg:w-80 h-[300px]"
          >
            <img :src="item.icon" alt="" class="w-20" />

            <h1 class="font-semibold text-xl">{{ item.title }}</h1>
            <p class="w-72 text-center text-[#6F7775]">
              {{ item.subtitle }}
            </p>
          </div>


          <!--------------- For Mobile View  ------------------>
          <div class="m-auto lg:hidden flex flex-col  justify-center   hover:border-[#2BCF9B] hover:border-2 items-center w ">

         
            <img :src="item.mobIcon" alt="" class="" />

            <h1 class="font-semibold text-base lg:text-xl">{{ item.title }}</h1>
            <p class="w-64  text-center text-sm lg:text-base text-[#6F7775]">
              {{ item.subtitle }}
            </p>
          </div>


        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BiddingIcon from "../../assets/icons/Bidding_icon.png";
import ListingIcon from "../../assets/icons/Listing icon.png";
import SpotPeIcon from "../../assets/icons/SpotPe icon.png";
import MobBiddingIcon from "../../assets/icons/mob2.svg";
import MobListingIcon from "../../assets/icons/mob1.svg";
import MobSpotPeIcon from "../../assets/icons/mob3.svg";

export default {
  data() {
    return {
      featureData: [
        {
          id: "1",
          icon: ListingIcon,
          mobIcon:MobListingIcon,

          title: "Listing",
          subtitle:
            "  Post images of your bulk recyclables, discover prices from interested buyers and accept your ideal bid.",
          link: "/features/listing",
        },
        {
          id: "2",
          mobIcon:MobBiddingIcon,
          icon: BiddingIcon,
          title: "Bidding",
          subtitle:
            "View live posts from sellers of bulk recyclables near you, submit your bid and contact interested sellers directly to transact.",
          link: "/features/bidding",
        },
        {
          id: "3",
          icon: SpotPeIcon,
          mobIcon:MobSpotPeIcon,
          title: "SpotPe",
          subtitle:
            "Get KYC verified, record a successful transaction on the app & receive a 7 day credit line to pay sellers instantly.",
          link: "/features/spotpe",
        },
      ],
    };
  },
};
</script>
