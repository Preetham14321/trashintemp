<template>
  <TheFeatures
    title="SpotPe"
    :dataSet="dataSet"
    subtitle="Improve customer loyalty with seamless payments "
    :heroImg="SpotPeHero"
    :headData="headData"
    imgClass="w-80"
  >
    <div   class="text-white flex items-center text-[10px] lg:text-base py-1.5 lg:py-2.5 px-2 lg:px-6 rounded-md bg-[#009368]">
      Apply Now
      <Icon
        icon="material-symbols:arrow-right-alt-rounded"
        class="text-lg ml-2"
      />
    </div>

    <div class="flex gap-2 items-center">
      <img :src="PlayButton" alt="" class="w-10" />
      <p class="text-white text-[10px] lg:text-base font-semibold">Watch video</p>
    </div>
  </TheFeatures>
</template>

<script>
import TheFeatures from "../TheFeatures.vue"
import Appstore from "../../assets/img/App_store_icon.png";

import Googlestore from "../../assets/img/google_icon.png";
import SpotPeHero from "../../assets/img/spotpehero.svg";
import PlayButton from "../../assets/img/Play_button_icon.png";
import icon1 from "../../assets/img/spotpeIcons/1.svg";
import icon2 from "../../assets/img/spotpeIcons/2.svg";
import icon3 from "../../assets/img/spotpeIcons/3.svg";
import icon4 from "../../assets/img/spotpeIcons/4.svg";

import Img1 from "../../assets/img/spotpeIcons/aboutFeature/1.svg";
import Img2 from "../../assets/img/spotpeIcons/aboutFeature/1-1.svg";
import Img3 from "../../assets/img/spotpeIcons/aboutFeature/1-2.svg";
export default {
  components: {
    TheFeatures
  },
  data() {
    return {
      Appstore,
      Googlestore,
      SpotPeHero,
      PlayButton,
      headData: [
        {
          id: "1",
          title: "24 hr KYC",
          icon: icon1
        },
        {
          id: "2",
          title: "Credit Limit upto 5 lakh",
          icon: icon2
        },
        {
          id: "3",
          title: "Instant Payment",
          icon: icon3
        },
        {
          id: "4",
          title: "Improved Cashflow",
          icon: icon4
        }
      ],
      dataSet: [
        {
          id: "1",
          icon: Img1,
          title: "You operate - We SpotPe",
          subtitle:
            "Operating a recycling facility is hard enough. Being a SpotPe enabled Buyer, you can simply focus on managing your processing facility while we take care of your seller payments. Upon applying for the facility, our team will reach out to you for a speedy KYC process and measure your creditworthiness. Upon being allocated a SpotPe Limit and agreeing to the terms & conditions, you can get started in a jiffy."
        },
        {
          id: "2",
          icon: Img2,
          title: "Hassle-free Accounting",
          subtitle:
            "Why manage multiple seller ledgers when we can automate it for you? Save on accounting costs with our automated ledger system."
        },
        {
          id: "3",
          icon: Img3,
          title: "Weekly payment cycle",
          subtitle:
            "Clear outstanding dues in one go with a weekly payment cycle. Make On-time payments to ensure you maintain a healthy credit score for more financing options."
        }
      ]
    };
  }
};
</script>
