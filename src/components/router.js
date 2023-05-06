// import Vue from 'vue'
// import Router from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Blog from './Blog.vue'
import PostDetails from './PostDetails.vue'


 const routes=[
    {
      path: '/',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/post/:id',
      name: 'PostDetails',
      component: PostDetails,
      props: true
    }
  ]
const router =createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})
export default router
