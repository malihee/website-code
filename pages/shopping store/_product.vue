
<template>
<div>
 
 <v-container>
   <v-row class="mb-10 mt-10
 ">
   <v-col
   sm="6"
   >
  <v-img :src= "product[0].image"
  width="60%"
  height="auto"></v-img>
   </v-col>
   <v-col sm="6">
       <h2 class="titlxe">{{product[0].title}}</h2>

  <p>
    {{product[0].description}}
  </p>
  <v-btn
        
        class=" white--text mb-1"
        color="deep-purple accent-4"
        @click="add_Cart()"
        width="300px"
      >
        Add to Cart
      </v-btn>
   </v-col>
</v-row>
</v-container>

</div>
</template>

<script>
export default {
    async asyncData({route}){
      console.log('lll',route.params); 
      const products = await fetch('https://my-json-server.typicode.com/malihee/website/products')
      .then(res => res.json())
      // console.log(products);
       const product = products.filter(item => {
       if(item.title == route.params.product){
        //  alert('ss')
         return item
       }})
       console.log(product);
      return {product}
    }
  }
</script>

<style>

</style>
