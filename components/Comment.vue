<template>
  <v-card
    elevation="6"
    outlined
    shaped
    class="mx:auto"
    >
      <v-card-title >
        {{comment.name}}
      </v-card-title>
      <v-card-subtitle>
          {{comment.email}}
      </v-card-subtitle>
      <v-card-text>
          {{comment.body}}
      </v-card-text>
  </v-card>
</template>

<script>
export default {
    props:{
        comment: Object,
    },
    // async asyncData(){
    //     const comments = await fetch('http://localhost:5000/comments')
    //     .then(res => res.json())
        
    // }
}
</script>

<style>

</style>