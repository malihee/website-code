
<template>
 <div>
   <v-row >
     <v-col 
     v-for=" (v, i) in products" :key="i"
     cols="12"
     sm="6"
     lg="4">
   <Product :product="v"/>
   </v-col>
   </v-row>
 </div>
</template>

<script>
import Product from '../../components/Product.vue'
export default {
  data(){
    return{
      products :[],
      photos:[]
    }
  },
    created(){
    // ...mapAction(['fetchcart']),
    // this.row_col()
    // if(this.$auth.loggedIn){
    //   this.$store.dispatch('fetchcart')
    //   console.log('dd',this.$store.state.cart_products);
    // }
    // else{
    //   alert('errorrrrrrrrr!!!!!')
    // }
  },
  
  components:{
    Product
  },
  
  async fetch(){
    this.products = await fetch('https://my-json-server.typicode.com/malihee/website/products').then(res =>
        res.json() )  

  }
}
</script>

<style scoped>

</style>
