// <script>


// export default{
//   name:'Card',
//   components:{
//     //  VueRouter
//   },
//   props: {
//     post: {
//       type: Object,
//       required: true
//     }
//   },
  
 
  
// }
// </script>

<script setup>
  const props=defineProps({
    post:{type:Object,
    required:true},
    
    
    
    
  })
 

</script>
<template>
 

  <main>
    
    <div>
           
              <div class="card">
                <div class="img-box">
                  
                  <img :src="post.jetpack_featured_media_url" alt="Profile picture">
                </div>
                <div class="content-box">
                    <div class="card-title">
                   <span>{{ post.type }}</span> - <span>{{post.date}}</span>
                   <div>
                   <h3>{{ post.slug }}</h3>
                   </div>
                   <div class="card-text">
                    <div v-html="post.excerpt.rendered" class="blog-text"></div>
                   </div>
                  

                </div>
                 
                </div>
                <div class="card-footer">
                        <p>{{ post.date }}</p>
                         <router-link class="link" :to="{ name: 'PostDetails', params: { id: post.id }}"><span >Read Full</span> <span><img src='../assets/arrow.svg'/></span></router-link>
                        
                   </div>
                

            </div>
           
    </div>
  
  </main>
</template>

<style lang='scss'>
@import '../assets/styles.scss'


</style>
