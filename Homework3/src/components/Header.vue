<template>
  <div id="nav">
    <img
      src="https://p.kindpng.com/picc/s/77-774135_clip-art-letters-logo-designs-logo-design-free.png"
      alt="logo"
    />
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About us</router-link> |
      <router-link to="/contact">Contact us</router-link>
    </div>
    <div id="account-circle" class="account-circle">
      <img
        class="profile_pic"
        src="https://miro.medium.com/max/256/0*vuQRIjTuwmZ7r6em.jpg"
        alt="profile_pic"
      />
    </div>
    <div id="account-dropdown">
      <p>
        John Doe
        <br />
        john.doe@example.com
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
#nav {
  //width: calc(100% - 1em);
  padding: 0.25em 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  img {
    width: 30px;
  }

  #account-circle {
    outline: none;
    text-decoration: none;
    height: 30px;
    cursor: pointer;
  }

  #account-circle .profile_pic {
    width: auto;
    height: 100%;
  }

  #account-dropdown {
    position: absolute;
    right: 0;
    top: calc(1em + 20px);
    background-color: #fff;
    display: none;
    padding: 0 0.25em;
  }

  #account-dropdown.visible {
    display: block;
  }

  #account-dropdown p {
    line-height: 1.4;
    color: #888888;
  }
}
</style>
