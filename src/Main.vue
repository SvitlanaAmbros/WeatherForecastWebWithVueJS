<template class = "images">
	<div>
		<v-carousel >
		    <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
		</v-carousel>
		<div class="welcome">
			<h1 class="text-lg-center"> We offer actual weather forecast in your city</h1>
			<h1 class="text-lg-center">Always keep it touch with us</h1>
		</div>
	</div>
</template>

<script>
	import img1 from "./assets/img1.jpg"
	import img2 from "./assets/img2.jpg"
	import img3 from "./assets/img3.jpg"
	import img4 from "./assets/img4.jpg"
	export default {
    data: function () {
        return {
           items: [
	          {
	            src: img1
	          },
	          {
	            src: img2
	          },
	          {
	            src: img3
	          },
	          {
	            src: img4
	          }
	        ]
        }
    }
}
</script>
<style>
.images{
	margin_top: 20px;
}
.welcome{
	margin: 20px;
}
</style>