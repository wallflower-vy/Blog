<script>


export default{
  name:'Banner',
  
}
</script>

<template>
 

  <main>
 
   <div class="banner-box">
    <div class="left-box">
        <img src="../assets/rocket.png" alt='rocket_pic' />
        <h1>Optimizing CSS for faster page loads </h1>
    </div>
    <div class="right-box">
        <div>
            <span>Front-end . 1 Hour Ago</span>
        <h2>Optimizing CSS for faster page loads </h2>
        <p class="text">Not long ago I decided to improve the loading times of my website. It already loads pretty fast, but I knew there was still room for improvement and one of them was CSS loading. I will walk you through the process and show you how you can improve your load times as well</p>
        <p  class="lower-text">To see how CSS affects the load time of a webpage we first have to know how the browser converts an HTML document into a functional webpage</p>
        </div>
        <div class="link-box">
            <small>3 Min Read</small>
            <router-link class="link" to=""><span >Read Full</span> <span><img src='../assets/arrow.svg'/></span></router-link>
        </div>
    </div>
   </div>
  
  </main>
</template>

<style lang='scss'>
@import '../assets/styles.scss'


</style>
