
<template>
<div>
 
  <h2 class="titlxe">{{post.title}}</h2>
 <v-container>
   <v-row class="mb-10 mt-10
 ">
   <v-col
   sm="6"
   >
  <v-img :src= photo.url
  width="100%"
  height="auto"></v-img>
   </v-col>
   <v-col sm="6">
  <p>
    {{post.body}}
  </p>
   </v-col>
</v-row>
</v-container>

<v-container>
<v-form >
  <v-textarea 
  
  class=" outlined"
  label="write your comment"
  full-width
  filled>
  </v-textarea>
  <v-row>
    <v-col sm="6">
  <v-text-field
    class=" outlined"
  label="your email"
  filled>
  </v-text-field>
    </v-col>
    <v-col sm="6">
  <v-btn>submit</v-btn>
    </v-col>
  </v-row>
</v-form>

<v-card>
  <Comment v-for="(i,v) in cm" :key="v" :comment="i"/>
</v-card>
</v-container>
</div>
</template>

<script>
import Comment from '../../components/Comment.vue'
export default {

    async asyncData({route}){
      console.log(route); 
      const post = await fetch(`https://my-json-server.typicode.com/malihee/website/posts/${route.params.post}`)
      .then(res => res.json())
      // console.log('hhhh',post);
       const photo = await fetch(`https://my-json-server.typicode.com/malihee/website/photos/${route.params.post}`)
      .then(res => res.json())
      // console.log('hhhh',post);
       const comments = await fetch('https://my-json-server.typicode.com/malihee/website/comments')
       .then(res => res.json())
       const cm = comments.filter(item =>{
         if(post.id == item.postId){
           return item
         }
       })
       console.log('cm:', cm);
        
      return {post , photo, cm}
    }
  }
</script>

<style>

</style>
