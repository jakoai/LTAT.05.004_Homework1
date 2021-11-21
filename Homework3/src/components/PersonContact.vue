<template>
  <div class="contact">
    <div class="contact-content">
      <b> {{ name }} </b> <br />
      <br />
      {{ email }} <br />
      {{ tel }} <br />
      <i> {{ description }} </i> <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "PersonContact",
  props: {
    name: String,
    email: String,
    tel: String,
    description: String,
  },
};
</script>

<style scoped>
.contact-content {
  align-items: start;
  text-align: start;
  padding: 10px;
  margin: 50px;
  border: 1px solid black; 
}

</style>
