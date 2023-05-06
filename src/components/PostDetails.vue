<script>

import Nav from './Nav.vue'
import axios from 'axios'
import Footer from './Footer.vue'
import Card from './Card.vue'
export default{
  name:'PostDetails',
    components:{
   Nav,
    Card
 
  
  },
   props: ['id'],
   
 

  data() {
    return {
      isLoading: false,
      blogPost: {},
     posts:[]
      
   
     
    }
  },
  created() {
    this.fetchPost(),
    this. getposts();
  },
  computed:{
  loadingAllData(){
    return this.isLoading ==true
    
  }
},
 
   methods: {
    async fetchPost() {
      this.isLoading = true
      const postId = this.$route.params.id // assuming the ID is passed in as a route parameter
      try {
        const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${postId}`)
        
        this.blogPost = response.data
       
        this.isLoading = false
      } catch (error) {
        console.error(error);
      }
    },

   async getposts(){
      this.isLoading = true
  axios.get('https://techcrunch.com/wp-json/wp/v2/posts')
    .then(response => {
    
      this.posts = response.data;

       this.isLoading = false
    })
    .catch(error => {
      console.log(error.message);
      this.error = error.message
          this.isLoading = false
    });
     }
  }


   }
  

  
</script>

<template >
 
 <img src="../assets/loader.gif" v-if="loadingAllData"/>
  <main v-else>
   <Nav />
   <div class="blog-details">
    <div class="post-box">
    <div class="mini-box">
          <p class="author">{{ blogPost.parselyMeta['parsely-author'][0]}}</p>
         <h2>{{ blogPost.slug }}</h2>
    <div v-html="blogPost.content.rendered" class="blogpost-text"></div>
    </div>
  </div>
   </div>
   <h2 class="more">More Articles</h2>
   <div class="cardComponet">
  <Card v-for="post in posts.slice(0, 3)" :key="post" :post='post' />
 </div>




  
   
   
 
  
   
  <div>

  </div>

  
  </main>
</template>

<style lang='scss'>
@import '../assets/styles.scss'


</style>
