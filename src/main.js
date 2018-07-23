import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
 
Vue.use(Vuetify)
Vue.use(VueRouter)

import 'vuetify/dist/vuetify.min.css'

import Forecast from "./components/Forecast.vue"
import Contact from "./components/Contact.vue"
import CityForecast from "./components/CityForecast.vue"
import Main from "./components/Main.vue"

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
