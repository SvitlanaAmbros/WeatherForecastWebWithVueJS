<template>
  <div>
    <v-toolbar color="deep-purple darken-2" dark>
      <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
      <v-toolbar-title class="white--text">
        <router-link to="/">
          <v-btn flat>HOME</v-btn>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="hidden-sm-and-down">
        <router-link to="/products">
          <v-btn flat>Forecast</v-btn>
        </router-link>
        <router-link to="/contact">
          <v-btn flat>Contact</v-btn>
        </router-link>  
      </div>
    </v-toolbar>
  
    <router-view></router-view>


      <v-footer height="auto" class="grey darken-3" >
        <v-layout row wrap justify-center>

          <router-link to="/">
            <v-btn color="white" flat>{{links[0]}}</v-btn>
          </router-link>
          <router-link to="/products">
            <v-btn color="white" flat>{{links[1]}}</v-btn>
          </router-link>
          <router-link to="/contact">
            <v-btn color="white" flat>{{links[2]}}</v-btn>
          </router-link>
          <!-- <v-btn
            color="white"
            flat
            v-for="link in links"
            :key="link"
          > -->
            <!-- {{ link }} -->
          </v-btn>
          <v-flex xs12 py-3 text-xs-center white--text>
            &copy;2018 — <strong>Vuetify</strong>
          </v-flex>
        </v-layout>
      </v-footer>

  </div>
</template>

<script>
export default {
     data: () => ({
      links: ['Home', 'Forecast', 'Contact']
    })

  }
</script>

<style>
  
</style>
