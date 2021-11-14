<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- TODO: For testing; remove after-->
    <ul>
      <li v-for="post of posts" :key="post.id">
        {{ post.content }}
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>
