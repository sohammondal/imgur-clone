<template>
  <div class="ui secondary pointing menu">
    <router-link to="/" class="active item">Image Storage</router-link>
    <div v-if="isLoggedIn" class="right menu">
      <router-link to="/" class="ui item">Gallery</router-link>
      <router-link to="/upload" class="ui item">Upload</router-link>
      <a class="ui item" @click="logout">Logout</a>
    </div>
    <div v-else class="right menu">
      <a class="ui item" @click="login">Login</a>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppHeader",
  methods: {
    ...mapActions(["login", "logout"])
  },
  computed: mapGetters(["isLoggedIn"])
};
</script>

<style scoped>
</style>