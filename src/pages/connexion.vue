<template>
  <div>
    <v-card>
      <v-img
        src="https://images.unsplash.com/photo-1573187119760-d764dbb5e2f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        height="200"
        class="grey darken-4"
      ></v-img>
      <v-card-title class="title">Connectez vous</v-card-title>
    </v-card>
    <firebase-login class="mt-12" />
  </div>
</template>

<style>
li {
  list-style-type: none;
}
</style>

<script>
import FirebaseLogin from '~/components/FirebaseLogin.vue'

export default {
  // name: 'Login',
  components: {
    FirebaseLogin,
  },
}
</script>
