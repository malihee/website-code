
<template>
  <div>
    <v-container >
    <v-row  >
      <v-col
        v-for="(v, i) in posts" :key="i" 
        cols="12"
        md="4"
        sm="6"
      >
         <Post :post="v" :photo="photos[i]"/>
      </v-col>
    </v-row>
  </v-container>
  <!-- pagination
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      circle
    ></v-pagination>
  </div> -->

  </div>
  
</template>

<script>
import {mapAction} from 'vuex'
import Post from '../components/Post.vue'
export default {
  // store: store,
  data(){
    return{
      posts :[],
      photos:[],
      row_num :0,
      col_num :0,
      page: 1
    }
  },
  created(){
    // ...mapAction(['fetchcart']),
    // this.row_col()
    if(this.$auth.loggedIn){
      this.$store.dispatch('fetchcart')
      console.log('fff',this.$store.getters.cartProducts);
    }
    else{
      // alert('errorrrrr!!!!!')
    }

  },
  components:{
    Post
  },
 
  async fetch(){
    this.photos = await fetch('https://my-json-server.typicode.com/malihee/website/photos').then(res =>
        res.json())
    this.posts = await fetch('https://my-json-server.typicode.com/malihee/website/posts').then(res =>
        res.json() )  
  }
}
</script>
<style scoped>

</style>
