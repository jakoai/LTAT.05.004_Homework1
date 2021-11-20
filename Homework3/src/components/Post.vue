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
      {{img ? '<img src="' + img + '" />' : ''}}
      <h3>{{ text }}</h3>
      <button>&#128077;</button>
      <a>{{likes}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    time: String,
    img: String,
    text: String,
    likes: Number, 
  },
};
</script>