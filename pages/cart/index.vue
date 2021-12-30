
<template>
 <div>
   <v-row >
     <v-col 
     v-for="(v, i) in products" :key="i"
     cols="12"
     sm="6"
     lg="4">
    <Cart :product="v"/>
    <!-- <span>{{fetchProductsId}}</span> -->
    </v-col>
   </v-row>
 </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Cart from '../../components/Cart.vue'
export default {
  data(){
    return{
      cart :[],
      products:[]
    }
  },

  components:{
    Cart
  },

  // async fetch () {
  //   await fetch('http://localhost:5000/cart?userId=1')
  //   .then(res => res.json()).then(data => this.cart = data[0])
  //   console.log('ssss',this.cart);
  //   this.fetchProducts()
  // },
 
 async mounted(){
    if(this.$auth.loggedIn){
     this.fetchProductsId()
    }
    else{
      alert('you should be logged in ')
      this.$router.push('/')
    }
 },

  computed:{
      // fetchProductsId(){
      //   // console.log('carttt',this.$store.state.cart_products);
      //   const prod=[]   
      //   for (var i=0; i<this.$store.getters.cartProducts.products.length ; i++){
      //       prod.push(this.$store.getters.cartProducts.products[i])
      //   }
      //   this.fetchProd(prod)
      // }
  },

  methods:{
    fetchProductsId(){
        // console.log('carttt',this.$store.state.cart_products);
        const prod=[]   
        for (var i=0; i<this.$store.getters.cartProducts.products.length ; i++){
            prod.push(this.$store.getters.cartProducts.products[i])
        }
        this.fetchProd(prod)
      },
    async fetchProd(prod){
      for(var i=0; i<prod.length ; i++){
        // this.products[i].quantity = prod[i].quantity
        await fetch(`https://my-json-server.typicode.com/malihee/website/products/${prod[i].productId}`)
        .then(res => res.json()).then(data => this.products.push({quantity: prod[i].quantity , val : data}))
      }
    }
  }
    
  }
</script>
<style scoped>

</style>
