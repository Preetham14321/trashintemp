<template>
  <div
    class="flex flex-col px-4 lg:px-0 pt-4 lg:pt-0 lg:flex-row justify-center lg:gap-20 lg:items-center"
  >
    <h1 class="font-semibold lg:hidden text-[10px] lg:text-lg text-[#009368]">
      Welcome to Trashin
    </h1>
    <h1 class="font-semibold lg:hidden text-xl lg:text-4xl text-[#213430]">
      Our Vision
    </h1>

    <hr
      class="text-4xl lg:hidden text-[#2BCF98] w-[40px] lg:w-[60px] bg-[#2BCF9B] h-1"
    />
    <img
      :src="OurVisonImg"
      alt=""
      class="w-[294px] m-auto pt-2 lg:pt-0 lg:m-0 lg:w-[400px] h-full"
    />

    <div class=" space-y-2 lg:space-y-4">
      <h1
        class="font-semibold hidden lg:block text-[10px] lg:text-lg text-[#009368]"
      >
        Welcome to Trashin
      </h1>
      <h1 class="font-semibold hidden lg:block text-4xl text-[#213430]">
        Our Vision
      </h1>

      <hr
        class="text-4xl hidden lg:block text-[#2BCF98] w-[60px] bg-[#2BCF9B] h-1"
      />
      <p
        class="font-semibold lg:font-medium text-sm lg:text-base text-[#272727]"
      >
        Paving the way towards a zero-waste world
      </p>

      <p class="text-[#272727] text-[11px]   lg:text-base" style="line-height:26px">
        We reinvent recycling. We recognize that sustainability is the need of
        the <br class="hidden lg:block" />
        hour. It’s our lifeblood. It gets us out of bed each morning. It pushes
        us to <br  class="hidden lg:block"/>
        constantly reimagine a zero-waste world. For you. For all that you
        <br class="hidden lg:block" />
        consume. For the future human civilization to thrive. For a better world
        to <br  class="hidden lg:block"/>
        live in. For infinity.
      </p>
    </div>
  </div>
</template>

<script>
import OurVisonImg from "../../assets/img/ourvision.svg";
export default {
  data() {
    return {
      OurVisonImg,
    };
  },
};
</script>
