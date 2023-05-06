<script>
import Nav from "./Nav.vue";
import Banner from "./Banner.vue";
import Card from "./Card.vue";
import Footer from "./Footer.vue";
import axios from "axios";

export default {
  name: "Blog",
  components: {
    Nav,
    Banner,
    Card,
    Footer,
  },
  data() {
    return {
      posts: [],
      // imageUrl:'',
      isLoading: false,
      data: null,
      error: null,
    };
  },
  mounted() {
    this.fetchdata();
  },
  computed: {
    loadingAllData() {
      return this.isLoading == true;
    },
  },
  methods: {
    async fetchdata() {
      this.isLoading = true;
      axios
        .get("https://techcrunch.com/wp-json/wp/v2/posts")
        .then((response) => {
         
          this.posts = response.data;
          // this.imageUrl = data.imageUrl;

          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error.message);
          this.error = error.message;
          this.isLoading = false;
        });
    },
  },
};
</script>

<template>
  <div class="loader" v-if="loadingAllData">
    <img src="../assets/loader.gif" />
  </div>
  <main v-else>
    <Nav />

    <Banner />

    <div>
      <div class="cardComponet">
        <Card v-for="post in posts.slice(0, 6)" :key="post" :post="post" />
      </div>
    </div>

    <Footer />
  </main>
</template>

<style lang="scss"></style>
