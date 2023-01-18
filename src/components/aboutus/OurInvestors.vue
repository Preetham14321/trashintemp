<template>
    <div class="w-full  space-y-2 lg:space-y-3 flex flex-col justify-center items-center">
      <h2 class="text-[#009368] font-semibold text-xs lg:text-lg">Meet</h2>
  
      <h1 class="font-semibold text-xl  lg:text-4xl text-[#213430]">Our Investors</h1>
      <hr class="text-4xl text-[#2BCF98] w-[60px] bg-[#2BCF9B] h-1 lg:my-2 " />
    
  <!--------- Team Details ------------>
  <div class="grid grid-cols-2 lg:grid-cols-4 justify-center items-center m-auto  lg:pt-6 gap-x-6 gap-y-20 space">
  
      <ul  v-for="item in teamDeatails" :key="item.id" class="flex flex-col space-y-1.5 lg:space-y-2.5 items-center mx-auto" >
          <img :src="item.img" alt="" class="w-24 lg:w-40 ">   
          <p class="text-[#009368] text-center lg:text-  font-medium lg:w-[17.5rem]  text-[9px] lg:text-xs">
              {{ item.role }}
          </p> 
          <h1 class="text-[#213430] text-center lg:text-start font-semibold text-[12.5px] lg:text-lg">{{ item.name }}</h1>
          
      </ul>
  </div>
    
    
    </div>
  </template>
  
  
  <script>
  
  
  import Img from '../../assets/img/about/teamImg/CB1.svg'
  export default {
      data(){
          return {
              teamDeatails : [
                  {
                      id:'1',
                      img:Img,
                      name:'Saamuhika Shakti',
                      role:'Social Alpha (Saamuhika Shakti(Implementing Partner)'
  
                  },
                  {
                      id:'2',
                      img:Img,
                      name:'Mr Kailash Agarwal',
                      role:'(MD, Genus Papers & Boards)'
  
                  },
                  {
                      id:'3',
                      img:Img,
                      name:'Mr Deepak Menon',
                      role:'(Director, Microsoft)'
  
                  },
                  {
                      id:'4',
                      img:Img,
                      name:'Mr Shrinivas Samant',
                      role:'(MD, Bank of America Merill Lynch)'
  
                  },
                  {
                      id:'5',
                      img:Img,
                      name:'Pradeep Gangaiah',
                      role:'CEO, Paradime Integrated Facility Services Pvt Ltd'
  
                  },
                  {
                      id:'6',
                      img:Img,
                      name:'Poornima Bhat',
                      role:'Angel Investors'
  
                  },
                  
              ]
          }
  
      }
  }
  
  
  </script>
  