
<template>
  <v-app>
    <Menubar />
<!-- 
    <v-card class="menu">
    <v-row 
    class="mt-5"
    >
      <v-col
      cols="5"
      >
      <div class="menu-items">
      <nuxt-link to="/"> blog </nuxt-link>
      </div>
      <div class="menu-items">
      <nuxt-link to="/administration"> admin </nuxt-link>
      </div>
      <div class="menu-items">
       <nuxt-link to="/shopping store"> products </nuxt-link>
      </div>
       <div class="menu-items">
        <v-btn @click="$auth.logout()"> logout </v-btn>
      </div>
      </v-col>
      <v-col
      cols="3" >
        <v-spacer></v-spacer>
      </v-col>
      
      <v-col 
      cols="4" order="end">
      <div class="menu-items">
      <v-btn @click="$vuetify.theme.dark=!$vuetify.theme.dark">Theme</v-btn>
      </div>
     
      <i class=" fa-shopping-cart"></i>
      <div class="menu-items">
      <nuxt-link to="/cart">
     <font-awesome-icon :icon="['fas', 'shopping-cart']"/>
      </nuxt-link>
      </div>
      <div v-if="!($auth.loggedIn)">
      <div class="menu-items">
        <v-btn><nuxt-link to="/register"> register </nuxt-link> </v-btn>
      </div>
      
      <div class="menu-items">
        <v-btn><nuxt-link to="/login"> login </nuxt-link></v-btn>
      </div>
      </div>
      <div v-else>
        <h6> {{this.$auth.user}}</h6>
      </div>
       
      </v-col>

    </v-row>
    </v-card> -->

    <Nuxt class="mt-16"/>
  </v-app>
</template>

<script>
import Menubar from '../components/Menubar.vue'
export default {
    components:{
      Menubar
       
    }
}
</script>

<style scoped>
.menu{
  height: 100px;
  width: 100%;
  margin-bottom: 50px;
  /* background-color: rgb(201, 101, 101); */
}
a{
  text-decoration: none;
}
.menu-items{
  text-align: center;
  margin-right: 10px;
  margin-left: 10px;
  height: auto;
  max-width: 100px;
  float: left;
}
</style>
