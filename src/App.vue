<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Footer from './components/Footer.vue';
import ScroolToTop from './components/ScroolToTop.vue';
import './assets/styles/index.css'
 

</script>

<template>
		<!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
<!-- <Footer/> -->
		<div class="">
			<!-- <HelloWorld msg="You did it!" /> -->

			<!-- <nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav> -->
		</div>

	<router-view></router-view>
</template>

<style scoped>

</style>
