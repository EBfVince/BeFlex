<template>
  <div v-if="user">
    <p class="display-1">Salut {{ user.displayName }} ☀</p>
    <v-btn nuxt to="/app/emploi-du-temps">
      EDT
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  },
  middleware: 'securePage'
}
</script>
