<template>
  <div class="posts">
    <div v-for="post in postList" :key="post.time">
      <Post
        :img="post.image"
        :time="post.time"
        :text="post.content"
        :likes="post.likes"
        :id="post.id"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";

export default {
  name: "Home",
  components: {
    Post,
  },
  computed: {
    postList() {
      return this.$store.getters.posts;
    },
  },
  mounted() {
    this.$store.dispatch("loadPosts");
  },
};
</script>
