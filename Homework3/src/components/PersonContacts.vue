<template>
    <div class="personContact">
        <div v-for="contact in contactList" :key="contact.id">
            <PersonContact
                :name="name"
                :email="email"
                :tel="telnr"
                :description="description"
            />
        </div>
    </div>
</template>

<script>
import PersonContact from "@/components/PersonContact.vue"
export default {
    name: "Contact",
    components: {
        PersonContact,
    },
    computed: {
        contactList(){
            return this.$store.getters.contacts;
        },
    },
    mounted(){
        this.$store.dispatch("loadContacts");
    }
};
</script>