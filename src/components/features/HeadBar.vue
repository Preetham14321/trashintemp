<template>
    <div class=" w-[300px] lg:w-[70%] m-auto drop-shadow-lg bg-white shadow-lg rounded-lg grid  grid-cols-2 lg:flex items-center justify-around lg:h-40 px-2 lg:px-0 py-7 lg:py-0 gap-y-5 ">
        <ul v-for="item in headData" :key="item.id"  >

            <div class="text-center flex flex-col items-center m-auto ">

                    <img :src="item.icon" alt="" class=" w-12 lg:w-20 ">
          <hr class="text-4xl text-[#2BCF98] w-12 bg-[#2BCF9B] h-0.5 my-2 " />

                <p class="text-center text-[#213430] font-semibold text-xs  lg:text-lg ">{{ item.title }}</p>
            </div>


        </ul>
    </div>
</template>

<script>


export default {

  props:['headData'],

}

</script>