<template>
    <TheFeatures
      title="Bidding"
      subtitle="View listings near you to place your bid and buy directly from interested sellers" :heroImg="BiddingHero" :headData="headData"
      :dataSet="dataSet"
      imgClass="w-64"
    >
      <img :src="Googlestore" alt=""  class="w-28 lg:w-48"/>
      <img :src="Appstore" alt=""  class="w-28 lg:w-48"/>
    </TheFeatures>
  </template>
  
  <script>
  import TheFeatures from "../TheFeatures.vue"
  import Appstore from "../../assets/img/App_store_icon.png";
  
  import Googlestore from "../../assets/img/google_icon.png";
  import BiddingHero from "../../assets/img/biddinghero.svg";

  import icon1 from '../../assets/img/biddingIcons/1.svg'
import icon2 from '../../assets/img/biddingIcons/2.svg'
import icon3 from '../../assets/img/biddingIcons/3.svg'
import icon4 from '../../assets/img/biddingIcons/4.svg'

import Img1 from '../../assets/img/biddingIcons/aboutFeature/1.svg'
import Img2 from '../../assets/img/biddingIcons/aboutFeature/1-1.svg'
import Img3 from '../../assets/img/biddingIcons/aboutFeature/1-2.svg'
  export default {
    components: {
      TheFeatures
    },
    data() {
      return {
        Appstore,
        Googlestore,
        BiddingHero,
        headData:[
                {
                    id:'1',
                    title:'Discover raw materials',
                    icon:icon1
                },
                {
                    id:'2',
                    title:'Verified Sellers',
                    icon:icon2
                },
                {
                    id:'3',
                    title:'PAN India',
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
                    title:'Maximise your productivity',
                    subtitle:'To run a profitable processing unit, it is vital to enhance the operational productivity by having sufficient raw material of the desired quality at the right time. Meet your production targets satisfactorily and fully utilise the capacity of your unit.'
                },
                {
                    id:'2',
                    icon:Img2,
                    title:'Wide range of materials',
                    subtitle:"You can bid on materials from all categories including Paper, Plastics, Kraft, Metals, E-waste apart from others. The variety of categories that Sellers post on our platform is something we're working to expand"
                },
                {
                    id:'3',
                    icon:Img3,
                    title:'Enabling you to Buy Direct',
                    subtitle:"We believe in the role of transparency to build trust within the community. By eliminating middlemen, our system encourages users to sell directly to verified buyers who place bids on their listing."
                },
            ]

      };
    }
  };
  </script>
  