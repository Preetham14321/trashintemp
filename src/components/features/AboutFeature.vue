<template>
  <div class=" space-y-10 lg:space-y-20">
    <div
      v-for="(item, key) in dataSet"
      :class="`${
        key % 2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }  flex flex-col lg:flex-row lg:gap-20 space-y-2 lg:space-y-0  justify-center items-center h-full `"
      :key="item.id"
    >
      <h1 class="lg:hidden w-max font-semibold text-xl lg:text-3xl">{{ item.title }}</h1>
      <hr class="lg:hidden text-4xl text-[#2BCF98] w-[35px] bg-[#2BCF9B] h-0.5" />
      <img :src="item.icon" class="w-[300px] lg:w-[420px] lg:h-[335px]" alt="" />
      <div class="lg:space-y-4 m-auto lg:m-0">
        <h1 class="hidden lg:block font-semibold text-3xl">{{ item.title }}</h1>
        <hr
          class="hidden lg:blocktext-4xl text-[#2BCF98] w-[60px] bg-[#2BCF9B] h-1"
        />
        <p class=" w-[291px] lg:w-[600px] text-[#213430] text-[13px]  lg:text-base">{{ item.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["dataSet"],

  data() {
    return {};
  },
};
</script>
