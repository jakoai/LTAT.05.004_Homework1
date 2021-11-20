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

<style lang="scss">
.post {
  border-radius: 10px;
  box-shadow: 2px 5px 15px #cfcfcf;
  background-color: white;
  margin: 10px;
  width: 100%;
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

.post-content button {
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

.post-content button:hover {
  background-color: #10629c;
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