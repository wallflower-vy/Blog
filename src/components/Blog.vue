<script>

import Nav from './Nav.vue'
import Banner from './Banner.vue'
import Card from './Card.vue';
import Footer from './Footer.vue'
import axios from 'axios'

export default{
  name:'Blog',
   components:{
   Nav,
   Banner,
   Card,
   Footer
  },
  data() {
    return {
      posts: []
    }
  },
   mounted() {
  axios.get('https://techcrunch.com/wp-json/wp/v2/posts')
    .then(response => {
     console.log(response.data); 
      this.posts = response.data;
    })
    .catch(error => {
      console.log(error);
    });
}
  
} 


</script>

<template>
 

  <main>
 <Nav/>
 <Banner />
 <Card  :posts="posts.slice(0, 6)" />
 <Footer />
   
  
  </main>
</template>

<style lang='scss'>



</style>
