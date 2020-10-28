<template>
  <v-layout column justify-center align-center>
    <v-img
      class="mt-8"
      src="https://firebasestorage.googleapis.com/v0/b/bento-vince.appspot.com/o/Groupe%2026.png?alt=media&token=1f0d89ba-e5b1-4a60-a55d-fc343e0e5e84"
      width="250px"
    />
    <v-btn id="decouvrir" class="mt-12" rounded color="primary" nuxt to="/app">
      Découvrir 🚀
    </v-btn>
    <img
      src="~/assets/undraw_having_fun_iais.svg"
      class="mt-12"
      width="250px"
    />
    <img
      class="bob"
      src="https://firebasestorage.googleapis.com/v0/b/bento-vince.appspot.com/o/ezgif.com-crop.gif?alt=media&token=4bda3f94-58f2-4bf6-89ec-6d3165bac5b3"
      alt="this slowpoke moves"
      width="250"
    />
    <p class="subtitle-2 bob">Made by Vince with ✨</p>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn'
    })
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/signOut').then(() => {
        console.log('logged out 📴')
      })
    }
  }
}
</script>

<style scoped>
.bob {
  margin-top: 70px;
}
</style>
