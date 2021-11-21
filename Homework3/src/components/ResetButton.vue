<!--
<template>
  <button @click="resetLikes">
    &#128077; <span>{{ likes }}</span>
  </button>
</template>

<script>
export default {
  name: "ResetButton",
  props: {  },
  methods: {
    resetLikes() {
      this.$store.commit("resetLikes");
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  background-color: #1778bd;
  color: transparent;
  text-shadow: 0 0 0 white;
  border-style: none;
  width: 70px;
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  font-size: 20px;
  cursor: pointer;
}

button:hover {
  background-color: #10629c;
}
</style>

-->