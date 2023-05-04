<script>

import Nav from './Nav.vue'
export default{
  name:'PostDetails',
    components:{
   Nav,
  
  },
  props: ['id'],
  data() {
    return {
      blogPost: {}
    }
  },
  mounted() {
    // fetch blog post with the specified ID from your API endpoint
    // and assign it to the `blogPost` object
  }
  
}
  
</script>

<template>
 

  <main>
  
   <Nav />
   <div>
    <h1>{{ blogPost.title }}</h1>
    <div v-html="blogPost.content"></div>
  </div>
  <div>

  </div>

  
  </main>
</template>

<style lang='scss'>
@import '../assets/styles.scss'


</style>
