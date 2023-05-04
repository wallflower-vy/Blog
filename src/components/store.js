import { createStore } from 'vuex'
import axios from 'axios'


const store = createStore({
    state: {
      posts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.posts = posts
      },
      addPosts(state, posts) {
        state.posts = [...state.posts, ...posts]
      }
    },
    actions: {
      async fetchPosts({ commit }) {
        const response = await axios.get('/api/posts?limit=6')
        commit('setPosts', response.data)
      },
      async fetchMorePosts({ commit, state }) {
        const response = await axios.get(`/api/posts?limit=3&skip=${state.posts.length}`)
        commit('addPosts', response.data)
      }
    },
    getters: {
        getPosts: state => state.posts
      }
    })
export default store;