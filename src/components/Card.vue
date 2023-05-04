<script>
import VueRouter from 'vue-router'
// import cardImage from '../assets/mini.png'
export default{
  name:'Card',
  components:{
     VueRouter
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
//   data(){
//     return{
//         items:[
//             {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             },
//              {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             },
//              {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             },
//              {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             },
//              {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             },
//              {
//                 id:1,
//                 image:'image',
//                 cardTitle:'Css Variables',
//                 text:'Colors play a vital role in making a web page usable or not. In CSS, we can control the foreground and background color of an element with the color and background properties.',
//                 timeRead:'2 minutes ago',
//                 datePosted:'2 Month Ago '

        
//             }
            
//         ]
//     }
//   },
 
  
}
</script>

<template>
 

  <main>
    <div class="card-box" >
            <div class="card" v-for="post in posts" :key="post.id">
                <div class="img-box">
                  
                          <img src='../assets/mini.png' alt ='twitter_icon'  /> 
                </div>
                <div class="content-box">
                   <span>Front-end .</span> <span>1 Month Ago </span>
                   <div>
                   <h3>{{ post.id }}</h3>
                   </div>
                   <div class="card-text">
                    <p>{{post.slug}}</p>
                   </div>
                   <div class="card-footer">
                        <p>12 Min Read</p>
                         <router-link :to="{ name: 'PostDetails', params: { id: post.id }}">Read More</router-link>
                        <!-- <a href="">Read Full</a> -->
                   </div>

                </div>

            </div>
           
    </div>
  
  </main>
</template>

<style lang='scss'>
@import '../assets/styles.scss'


</style>
