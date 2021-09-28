
<template>
 <div>
   <Post v-for=" (v, i) in posts" :key="i" :post="v"/>
 </div>
</template>

<script>
import Post from '../components/Post.vue'
export default {
  data(){
    return{
      posts :[]
    }
  },
  components:{
    Post
  },
  async fetch(){

  }
}

</script>
<style scoped>

</style>
