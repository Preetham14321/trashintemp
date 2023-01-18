<template>
  <div class="w-full space-y-2 lg:space-y-3 flex flex-col justify-center items-center">
    <h2 class="text-[#009368] font-semibold text-xs lg:text-lg">Meet</h2>

    <h1 class="font-semibold text-xl  lg:text-4xl text-[#213430]">Our Team</h1>
    <hr class="text-4xl text-[#2BCF98] w-[40px] lg:w-[60px] bg-[#2BCF9B] h-0.5 lg:h-1 lg:my-2 " />
  
<!--------- Team Details ------------>
<div class="grid grid-cols-2 lg:grid-cols-4  lg:pt-6 gap-x-4 lg:gap-x-16 gap-y-20 space">

    <ul  v-for="item in teamDeatails" :key="item.id" class="flex flex-col space-y-1.5 lg:space-y-2.5 items-center" >
        <img :src="item.img" alt="" class="w-24 lg:w-40">   
        <p class="text-[#009368] text-center lg:text-start font-medium text-[9px] lg:text-xs">
            {{ item.role }}
        </p> 
        <h1 class="text-[#213430] font-semibold  text-center lg:text-start  text-[12.5px] lg:text-lg">{{ item.name }}</h1>
        
    </ul>
</div>
  
  
  </div>
</template>


<script>


import CB1 from '../../assets/img/about/teamImg/CB1.svg'
import Faisal2 from '../../assets/img/about/teamImg/Faisal2.svg'
import Aditi3 from '../../assets/img/about/teamImg/Aditi3.svg'
import Srinivas4 from '../../assets/img/about/teamImg/Srinivas4.svg'
import Navneeth5 from '../../assets/img/about/teamImg/Navneeth5.svg'
import Deepika6 from '../../assets/img/about/teamImg/Deepika6.svg'
import Gopal7 from '../../assets/img/about/teamImg/Gopal7.svg'
import Parvika8 from '../../assets/img/about/teamImg/Parvika8.svg'
import kiran9 from '../../assets/img/about/teamImg/kiran9.svg'
import Preetham11 from '../../assets/img/about/teamImg/Preetham11.svg'
export default {
    data(){
        return {
            teamDeatails : [
                {
                    id:'1',
                    img:CB1,
                    name:'CHANDRASHEKAR BHAT M',
                    role:'Founder & CEO'

                },
                {
                    id:'2',
                    img:Faisal2,
                    name:'AHAMED FAISAL MOOSA',
                    role:'Chief Operating Officer (COO)'

                },
                {
                    id:'3',
                    img:Aditi3,
                    name:'ADITI AGARWAL',
                    role:'Chief People Officer'

                },
                {
                    id:'4',
                    img:Srinivas4,
                    name:'SRINIVAS MURTHY',
                    role:'Associate - User Engagement'

                },
                {
                    id:'5',
                    img:Gopal7,
                    name:'GOPAL DAS',
                    role:'Business Development Manager'

                },
                {
                    id:'6',
                    img:Deepika6,
                    name:'DEEPIKA',
                    role:'Finance Associate'

                },
                {
                    id:'7',
                    img:Parvika8,
                    name:'PARVIKA LASOD',
                    role:'HR Executive'

                },
             
                {
                    id:'8',
                    img:Navneeth5,
                    name:'Navaneeth T S',
                    role:'Associate - User Engagement'

                },
             
            
               
                {
                    id:'9',
                    img:kiran9,
                    name:'KIRAN KRISHNA',
                    role:'Associate Designer'

                },
                {
                    id:'10',
                    img:Preetham11,
                    name:'B PREETHAM KUMAR',
                    role:'Software Engineer'

                },
                // {
                //     id:'12',
                //     img:Img,
                //     name:'CHANDRASHEKAR S TOTAGER',
                //     role:'Sales Team Leader'

                // },
 
            ]
        }

    }
}


</script>
