<template>
  <v-card
    class="mx-auto "
    max-width="auto"
    height="400"
  >
 
  <nuxt-link :to="`shopping store/${product.title}`"
  style="text-decoration: none;"
  class="black">

    <v-card-title>
      <h2 class="text-h6">
        {{product.title}}
      </h2>
      <v-spacer></v-spacer>
      <span class="text-h8">{{product.price}}</span>
    </v-card-title>
    <v-img :src="product.image"
    contain
    height="150"
    ></v-img>
  </nuxt-link>

    <v-divider class="mx-4"></v-divider>

    <!-- <v-card-text>
      <span class="subheading">Select size</span>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple--text text--accent-4"
        mandatory
      >
         <v-chip
          v-for="size in sizes"
          :key="size"
          :value="size"
        >
          {{ size }}
        </v-chip> 
      </v-chip-group>
    </v-card-text> -->

    <v-card-actions
    block
      style="
      position :relative;
      background-color :red"
      class="pb-10 mt-10">
      <v-btn
        block
        class=" white--text mb-1"
        color="deep-purple accent-4"
        @click="add_Cart()"
      >
        Add to Cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data: () => ({
      // selection: '08',
      // sizes: [
      //   '04', '06', '08', '10', '12', '14',
      // ],
    }),
    props:{
      product: Object
    },
    methods:{
      ...mapActions(['addToCart']),
      add_Cart(){
        console.log('prodd:', this.product);
       if(this.$auth.loggedIn){
         this.addToCart({product:this.product, amount:1})
        //  alert('its ok');
       }
       else{
         alert('you should be logged in ')
       }
      }
    }
  }
</script>