<template>

<slot>

</slot>


</template>

<script>
    // This component fix the issue of middle View Page which Makes to Top view





  export default {
  mounted() {
    window.scrollTo(0, 0);

    console.log(`the component is now mounted.`)
  }
}
 

 

</script>