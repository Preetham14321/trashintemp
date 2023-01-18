import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// import 'vuetify/styles';
// import { createVuetify } from 'vuetify';
import { createStore } from 'vuex';
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';
// import { aliases, mdi } from 'vuetify/iconsets/mdi';
import '@mdi/font/css/materialdesignicons.css';
// import "@/assets/styles/tailwind.css";
import './assets/styles/index.css'
import './assets/main.css';
/* For Icons */
import { Icon } from '@iconify/vue';

const store = createStore({
	state(){

	},
	mutations:{
		scrollIntoView() {
			const el = this.$el.querySelector("#impact");
			if (el) {
			  el.scrollIntoView();
			}
	}
}
})

// const vuetify = createVuetify({
// 	components,
// 	directives,
// 	icons: {
// 		defaultSet: 'mdi',
// 		aliases,
// 		sets: {
// 			mdi,
// 		},
// 	},
// 	scrollBehavior() {
// 		document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
// 	}
// });

const app = createApp(App);

// app.use(vuetify);

app.component('Icon',Icon)
app.use(router);
app.use(store)
app.mount('#app');
// Vue.prototype.$scrollToTop = () => window.scrollTo(0,0)

