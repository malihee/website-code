
<template>
  <div>
      <div class="img"></div>
      <div class="title"><h3>{{post.title}}</h3></div>
      <div class="content"> <p>{{post.content}}</p> </div>
      <div class='date, author'> {{post.date}} , {{post.author}} </div>
  </div>
</template>

<script>
    export default {
        name:'Post',
        props:{
            post: Object
        }
    }
</script>

<style>

</style>