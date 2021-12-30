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
        {{product.val.title}}
      </h2>
      <v-spacer></v-spacer>
      <span class="text-h8">{{product.val.price}}</span>
    </v-card-title>
    <v-img :src="product.val.image"
    contain
    height="150"
    ></v-img>
  </nuxt-link>

    <v-divider class="mx-4"></v-divider>
   <span class="text-h8"> quantity : {{product.quantity}}</span>
    <v-card-actions
      block
      style="
      position :relative;
      background-color :red"
      class="pb-10 mt-10">
      <v-row>
        <v-col
        cols="4"
        >
      <v-btn
        block
        class=" white--text mb-1"
        color="deep-purple accent-4"
        @click="del_Cart()"
      >
        delete from Cart
        
      </v-btn>
      </v-col>
      <v-spacer/>
      <v-col
      cols="5">
      <v-text-field v-model="quantity" 
      type="number"
      solo
      placeholder="quantity"
      :rules="rules.quantity"
      color="pink"
      required></v-text-field>
      </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import {mapActions} from 'vuex'
  export default {
    data: () => ({
      quantity:0,
      rules:{
        quantity:[
          val => val > 0 || `type a valid number`
        ]
      }
    }),
    props:{
      product: Object
    },
    methods:{
      ...mapActions(['delFromCart']),
      del_Cart(){
        console.log('prodd:', this.product);
        if(this.quantity > 0){
          this.delFromCart({product:this.product.val, amount:this.quantity})
        //  this.$router.push('/cart') 
          // this.$nuxt.refresh()
          // this.refreshData
          // this.$forceUpdate();
       }
       else{
         alert('you should enter a valid number')
       }
        this.$router.go('/cart')
      }
    }
  }
</script>