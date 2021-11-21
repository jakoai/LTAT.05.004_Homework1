<template>
  <div class="home">
    <button class="resetButton" @click="resetLikes">Reset likes</button>
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts,
  },
  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
};
</script>

<style>
  .home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .resetButton {
    display: block;
    top: 10%;
    background-color: #1778bd;
    color: transparent;
    text-shadow: 0 0 0 white;
    border-style: none;
    width: 100px;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    font-size: 20px;
    cursor: pointer;
  }

  .resetButton:hover {
    background-color: #10629c;
  }

</style>
