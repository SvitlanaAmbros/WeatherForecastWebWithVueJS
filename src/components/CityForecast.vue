<template >
	    <v-flex xs12 sm3  >
	      <v-card hover class="fon">
	        <div class="headline">
	         </div>
	        <v-card-media
	          class="white--text"
	          height="300px"
	          :src="img"
	          id="img"
	          contain>

	          <v-container fill-height fluid>
	            <v-layout fill-height>
	              <v-flex xs12 align-end flexbox>

	              </v-flex>
	            </v-layout>
	          </v-container>
	        </v-card-media>
	        <v-card-title class="inf" >
	          <div class="info" >
	          	<h2 class="text-lg-center">{{day}}</h2>
	            <span class="title">Max temp: {{element.temp.min}} °С</span><br>
	            <span class="title">Min temp: {{element.temp.max}} °С</span><br>
	            <span class="title">Day temp: {{element.temp.day}} °С</span><br>
	            <span class="title">Night temp: {{element.temp.night}} °С</span><br>
	            <span class="title">Humidity: {{element.humidity}} %</span><br>
	            <span class="text"> {{element.weather[0].description}}</span><br>
	          </div>
	        </v-card-title>
	        <v-card-actions>
	        </v-card-actions>
	      </v-card>
	      	    </v-flex>
</template>

<script>
	export default{
		props:['element', 'index'],
		data(){
			return{
			}
		},
		computed:{
				"day": function(){
					let today = new Date();
					var dd = today.getDate() + this.index;
					var mm = today.getMonth() + 1;
					var yyyy = today.getFullYear();
					return dd + '/' + mm + '/' + yyyy;
				},
				"img": function(){
					let imgURL = "";
					switch (this.element.weather[0].main) {
						case "Clear":
							imgURL = "sunny.png";
							break;
						case"Clouds":
							imgURL = "cloudness.png";
							break;
						case "Rain":
			                imgURL = "rainny.png";
			                break;
					}
					return require('../assets/' + imgURL);
				},
		}	
}

</script>

<style>
.text{
	font-size: 22px;
	color:#FF5722;
}
.title{
	color:#000000;

}
.fon{
	background-color: #7E57C2;
	border-radius: 10px;
	padding: 10px;
	margin-bottom:10px;
}

.info{
	text-align: center;
	background-color: #FFFFFD;
	margin: auto;
	border-radius: 10px;
	padding: 10px;
}
#img{
	margin: auto;
	width: 200px;
	height: 200px;
}
</style>