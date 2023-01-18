<template>
  <div class="w-[88%] bg-white  rounded-lg m-auto flex flex-col lg:flex-row items-center drop-shadow-md justify-around lg:h-40   lg:pl-4">
    <div class="flex gap-2 py-3 lg:py-0 " v-for="item,key in barData" :key="item.id">
      <div class="flex  flex-col lg:flex-row ">
        <div class="flex  items-center gap-2 px-2">

        <div class="bg-[#EFEFEF] w-24 lg:w-max text-[#009368] p-4 font-bold">
          <p class="text-center text-2xl  lg:text-4xl">{{ item.number }}</p>
          <p class="text-sm lg:text-lg text-center">{{ item.quan }}</p>
        </div>
        
        <p :class="`w-40 lg:w-48 text-xs  lg:text-base text-[#213430] ${key<2?'lg:border-r-[3px] border-[#2BCF9B]':''} `">
          {{ item.sub }}
        </p>
      </div>

        <hr
            :class="`lg:hidden text-[#2BCF98] w-12 m-auto bg-[#2BCF9B] border-[#2BCF98] mt-0.5 h-0.5 ${key<2?'':'hidden'} ` "
          />
      </div>
    </div>
     <div class="bg-[#009368] py-3 lg:py-0 w-full  lg:mt-0 h-full flex flex-col px-2 justify-center ">
          <hr class="text-4xl text-[#2BCF98] w-12 bg-white h-0.5 m-auto lg:m-0 " />

        <p class="text-sm m-auto lg:m-0 pt-2 lg:pt-1  lg:text-xl w-max text-white font-semibold   ">
            We are solving a <br> global waste crisis.
        </p>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      barData: [
        {
          id: "1",
          number: "20",
          quan: "Million",
          sub: " Waste workers in mitigating this crisis globally this year.",
        },
        {
          id: "2",
          number: "11.2",
          quan: "Billion",
          sub: "tons of waste generated per year.",
        },
        {
          id: "3",
          number: "34.81",
          quan: "Billion",
          sub: "tons CO2 emitted into the atmosphere from waste globally every year.",
        },
      ],
    };
  },
};
</script>
