<template>
  <div class="contact">
    <div class="contact-content">
        {{name}} <br> {{email}} <br> {{tel}} <br> {{description}}
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
    }
};
</script>
