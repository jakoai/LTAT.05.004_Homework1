<template>
  <div class="post">
    <div class="post-header">
      <img
        class="profile_pic"
        src="https://miro.medium.com/max/256/0*vuQRIjTuwmZ7r6em.jpg"
        alt="profiilikas"
      />
      <p>{{ time }}</p>
    </div>
    <div class="post-content">
      <img :src="img" alt="Post image" v-if="img" />
      <h3>{{ text }}</h3>
    </div>
    <LikeButton :likes="likes" :id="id" />
  </div>
</template>

<script>
import LikeButton from "./LikeButton";
export default {
  name: "Post",
  components: { LikeButton },
  props: {
    id: {
      type: Number,
      required: true,
    },
    time: String,
    img: String,
    text: String,
    likes: Number,
  },
};
</script>

<style lang="scss">
.post {
  border-radius: 10px;
  box-shadow: 2px 5px 15px #cfcfcf;
  background-color: white;
  margin: 10px;
}

.post-header {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
}

.post-header img {
  width: 50px;
}

.post-header p {
  font-style: italic;
}

.profile_pic {
  border-radius: 50%;
}

.post-content img {
  width: 100%;
}

h3 {
  margin: 5px;
  font-weight: bold;
  font-style: normal;
  font-size: 200%;
}

img ~ h3 {
  font-style: italic;
  font-size: 100%;
}
</style>
