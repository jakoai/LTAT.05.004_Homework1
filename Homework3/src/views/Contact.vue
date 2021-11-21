<!--template>
  <div class="about">
    <h1>Contact us via Moodle group chat</h1>
    <b>authors:</b><br /><br />
    Jako Aimsalu - tel: 900 22 55, email: kiisuke@hot.ee<br />
    Kerdo Kurs - tel: 900 22 66, email: hacker.man@gmail.com<br />
    Toomas Roosma -tel 900 22 66, email: superstudent@ut.ee<br />
  </div>
</template-->

<template>
  <div class="contact">
    <button class="resetButton" @click="resetLikes">Reset likes</button>
    <PersonContacts />
  </div>
</template>

<script>
import PersonContacts from "@/components/PersonContacts.vue";
export default {
  components: {
    PersonContacts,
  }, 
}
</script>