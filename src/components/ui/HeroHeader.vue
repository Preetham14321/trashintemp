 
<template>

	<!------------------------- For Desktop View ------------------->
	<main :class=" `${className} hidden lg:block  lg:w-screen bg-center bg-no-repeat bg-cover `"   :style="{
        'background-image': `url(${(Bghero)})`,
        
       
      }">
	<TheHeader/>
    <div  :class="`   ${slotClass} `">
        <slot></slot>
    </div>
	</main>

<!------------------------  For Mobile View --------------->
<div class="h-14 lg:hidden">

	<TheHeader/>
</div>
<main :class=" `${className}  lg:hidden w-full  bg-center   bg-no-repeat bg-cover `"   :style="{
        'background-image': `url(${(bgImg==null ? MbHero:bgImg )})`,
        
       
      }">
    <div  :class="`relative  top-10    ${slotClass} `">

        <slot></slot>
    </div>
	</main>

</template>

<script>
import TheHeader from './TheHeader.vue'
import Bghero from '../../assets/img/heroBg.svg'
import MbHero from '../../assets/img/mobileHeroBg.svg'
export default{

	props:['className','slotClass','bgImg'],
	components:{
  TheHeader:TheHeader
	},
	data(){
		return {
			Bghero:Bghero,
			MbHero:MbHero
		}
	}
 
}

</script>

