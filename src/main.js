import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
 
Vue.use(Vuetify)
Vue.use(VueRouter)

import 'vuetify/dist/vuetify.min.css'

import Forecast from "./Forecast.vue"
import Contact from "./Contact.vue"
import CityForecast from "./CityForecast.vue"
import Main from "./Main.vue"

const routes = [
		{path:"/", component: Main},
		{path:"/products", component: Forecast},
		{path:"/contact", component: Contact},
		{path:"/payment", component: CityForecast}
]

const router = new VueRouter({
	mode:"history",
	routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
