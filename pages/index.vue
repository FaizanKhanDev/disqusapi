<template>
  <div>
    <!-- <Disqus short_name="your Short name"></Disqus> -->
    <v-btn @click="createUsers">Create User</v-btn>
  </div>
</template>

<script>

import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["signIn",]),
    async createUsers() {
      // this.$store.dispatch('auth/signIn', this.$nhost);
      try {
        await this.$store.dispatch('auth/signIn');
        // Handle successful sign-up
      } catch (error) {
        // Handle sign-up error
        console.log("client side error")
      }
      // console.log("clien side")
      // await this.signIn();
    },
  }
}

</script>