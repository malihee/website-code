
<template>
  <div>
  <v-card
    class="mx-auto"
    max-width="auto"
    height="400"
  >
    <v-img
      :src= photo.thumbnailUrl
      height="200px"
    ></v-img>

    <v-card-title>
      {{post.title}}      
    </v-card-title>

    <!-- <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle> -->

    <v-card-actions>
      <nuxt-link :to= "`blog/${post.id}`">
      <v-btn
        color="orange lighten-2"
        text
      >
        explore
      </v-btn>
      </nuxt-link>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          {{substr}}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </div>
</template>


<script>
    // import Comment from './Comment.vue';
    export default {
  
        name:'Post',
        data: () => ({
      show: false,
      substr:''
    }),
    // components:{
    //   Comment
    // },
    created(){
      this.substring()
    },
        props:{
            post: Object,
            photo : Object
        },
        methods:{
            substring(){
                var maxLength =150
                var trimmedString = this.post.body.substr(0, maxLength);
                //re-trim if we are in the middle of a word
                this.substr = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
                
      }
        }
    }
</script>

<style>

</style>