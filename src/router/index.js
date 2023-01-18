import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Listing from '../views/features/Listing.vue'
import Bidding from '../views/features/Bidding.vue'
import SpotPe from '../views/features/SpotPe.vue'
import ContactUs from '../views/Contactus.vue'
import Aboutus from '../views/AboutUs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/features/listing',
      name: 'listing',
      component: Listing
    },
    {
      path: '/features/bidding',
      name: 'bidding',
      component: Bidding
    },
    {
      path: '/features/spotpe',
      name: 'spotpe',
      component: SpotPe
    },
    {
      path: '/contactus',
      name: 'contactus',
      component: ContactUs
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: Aboutus
    },
    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    }
  ],
  
})

export default router


/* 
/// For Scrool to top page
scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else {
      return {x:0,y:0}
    }
  }*/