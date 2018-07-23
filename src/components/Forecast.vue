<template>	
	<div class="page">
		<h1 class="daysforecast">{{str}} {{cityToUpperCase}}</h1>
		<div class="container">
			<div class = "cities">
			    <radiogroup v-for="item in cities"> 
			        <input type="radio" v-model="chosen" :value="item.value" @change="changeValue(item.value)"> {{ item.value }} 
			    </radiogroup>
			  </ul>
			</div>

			<v-container fluid grid-list-md>
			    <v-layout row wrap >
			 		<cityForecast v-for="(dayData, index) in forecastData.list" :element="dayData" :index="index" />
				</v-layout>
			</v-container>
	  	</div>
  	</div>
</template>

<script>
import cityForecast from "./CityForecast.vue"
	export default {
		components:{
			cityForecast
		},
		data(){
		    return{
		    	str: "4 DAY FORECAST IN",
		     	forecastData: [],
		     	city:"Kiev",
		     	chosen: "Kiev",
		        cities: [
		          { value: 'Singapore'},
		          { value: 'Kiev' },
		          { value: 'Lviv' },
		          { value: 'Paris' },
		          { value: 'New York'},
		          { value: 'Tokyo'},
		          { value: 'Amsterdam'}
		         
		        ],
		    }
		},
		mounted(){
	    fetch(this.URL)
	    	.then(response =>response.json())
	        .then((data) => {
	          this.forecastData = data;
	        })
	    },
	    computed: {
	    	"cityToUpperCase": function() {
	    		return String(this.city).toUpperCase();
			},
			"URL": function() {
				return 'https://api.openweathermap.org/data/2.5/forecast/daily?q=' +
				 this.city + '&units=metric&cnt=4&appid=bf39986af8bdf0ba48542e4331fc29fc'
			}
		},
		  methods:{
      		changeValue(value) {
      			this.city = value;
      			fetch(this.URL)
		    	.then(response =>response.json())
		        .then((data) => {
		          this.forecastData = data;
		        });
	      		}
      	}
}
</script>

<style>
.page{
	background: url('../assets/fon.jpg')no-repeat center center;
}
.daysforecast{
	padding: 20px;
	background-color :orange;
	text-align: center;
}
.cities{
	font-size:28px;
	background-color: rgba(0, 0, 0, 0.6);
	box-shadow: 0 10px 70px rgba(0, 0, 0.15);
	border-radius: 5px;
	color: white;
	text-align: center;
}
</style>
