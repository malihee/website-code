
<template>
  <v-toolbar color="indigo" class="fixed-bar mb-16" app fixed >
        <!-- <v-toolbar-title>Toolbar Mobile Menu</v-toolbar-title> -->
       
        <v-toolbar-items class="hidden-sm-and-down" >
          <v-btn v-for="item in menu" :key="item.icon" :to="item.link" text>
            <div v-if="item.title === 'logout'" @click="$auth.logout()">{{item.title}}</div>
            <div v-else>{{item.title}}</div>
          </v-btn>
        </v-toolbar-items>
          <!-- <v-app-bar color="indigo" > -->
            
          <!-- </v-app-bar> -->
        <v-menu 
          class="hidden-md-and-up" 
          transition="slide-y-transition"
          bottom>
           <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon 
             v-bind="attrs"
             v-on="on"
             class="hidden-md-and-up">
             </v-app-bar-nav-icon>
            </template>
          <!-- <v-toolbar-side-icon slot="activator" ></v-toolbar-side-icon> --> 
         <v-list  width="600">
            <v-list-item v-for="(item, i) in menu" :key="i" :to="item.link" >
              <!-- <span v-if="item.title === 'logout'" @click="this.$auth.logout()">dd</span> -->
            <v-list-item-title v-if="item.title === 'logout'" @click="$auth.logout()">{{ item.title }}</v-list-item-title>
            <v-list-item-title v-else>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        

        </v-menu>
<v-spacer></v-spacer>
 <nuxt-link to="/cart">
     <font-awesome-icon :icon="['fas', 'shopping-cart']" :color="$vuetify.theme.dark ? 'white' : 'black'"/>
      </nuxt-link>
      <v-btn @click="$vuetify.theme.dark=!$vuetify.theme.dark" text>Theme</v-btn>

  </v-toolbar>
</template>

<script>
export default {
data(){
    return{
        menu: [
        { icon: "home", title: "blog" , link: "/"},
        { icon: "info", title: "products" , link:"/shopping store"},
        // { icon: "warning", title: "theme" },
        { icon: "warning", title: "login", link: "/login" },
        { icon: "warning", title: "register", link: "/register" },
        { icon: "warning", title: "logout" , link: "/"}

      ]
    }
}
}
</script>

<style>
.fixed-bar{
   position: fixed;
  right: 0;
  top: 0;
  left: 0;
  /* width: 8em; */
  /* margin-top: -2.5em; */
  z-index: 1;
  margin-bottom: 20px;
  }
</style>