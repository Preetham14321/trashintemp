<template>
  <TheFeatures
    title="Listing"
    subtitle="Post your listing to discover bids from interested buyers and sell directly!

" :heroImg="ListingHero"
:headData="headData"
:dataSet="dataSet"
imgClass="w-64"
  >
    <img :src="Googlestore" alt=""  class="w-28 lg:w-48 " />
    <img :src="Appstore" alt=""  class=" w-28 lg:w-48"  />
  </TheFeatures>
</template>

<script>
import TheFeatures from "../TheFeatures.vue"
import Appstore from "../../assets/img/App_store_icon.png";

import Googlestore from "../../assets/img/google_icon.png";
import ListingHero from "../../assets/img/listinghero.svg";

import icon1 from '../../assets/img/listingIcons/1.svg'
import icon2 from '../../assets/img/listingIcons/2.svg'
import icon3 from '../../assets/img/listingIcons/3.svg'
import icon4 from '../../assets/img/listingIcons/4.svg'

import Img1 from '../../assets/img/listingIcons/aboutFeature/1.png'
import Img2 from '../../assets/img/listingIcons/aboutFeature/1-1.png'
import Img3 from '../../assets/img/listingIcons/aboutFeature/1-2.png'
export default {
  components: {
    TheFeatures
  },
  data() {
    return {
      Appstore,
      Googlestore,
      ListingHero,
    
  
            headData:[
                {
                    id:'1',
                    title:'Live in 30 mins',
                    icon:icon1
                },
                {
                    id:'2',
                    title:'Verified Buyers',
                    icon:icon2
                },
                {
                    id:'3',
                    title:'Compare Prices',
                    icon:icon3
                },
                {
                    id:'4',
                    title:'On-call Support',
                    icon:icon4
                },
            ],
            dataSet:[
                {
                    id:'1',
                    icon:Img1,
                    title:'Simplified Listing experience ',
                    subtitle:'Sharing high-quality images of your recyclables increases the chances of your listing getting accepted. Similar to this, choosing the right quantity bracket will guarantee that more buyers will find your listing relevant, increasing your chances of receiving the highest bid'
                },
                {
                    id:'2',
                    icon:Img2,
                    title:'Wide range of materials',
                    subtitle:'You can list materials from all categories including Paper, Plastics, Kraft, Metals, E-waste apart from others. We work to expand the range of categories that Buyers on our platform accept'
                },
                {
                    id:'3',
                    icon:Img3,
                    title:'Enabling you to Sell Direct',
                    subtitle:'We believe in the role of transparency to build trust within the community. By eliminating middlemen, our system encourages users to sell directly to verified buyers who place bids on their listing.'
                },
            ]

           
        

    
    };
  }
};
</script>
