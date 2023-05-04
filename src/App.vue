<script>
import Blog from './components/Blog.vue'
import axios from'axios'
// import Nav from './components/Nav.vue'

export default{
  name:'App',
  components:{
   Blog,
  
  },

 
}
</script>

<template>
 

  <main>
   
   
   <Blog />
   
  
  </main>
</template>

<style lang='scss'>
@import './assets/styles.scss'




</style>
