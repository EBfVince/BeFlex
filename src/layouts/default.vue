<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" @click="go('/')" />
      <v-spacer />

      <v-btn v-if="!isLoggedIn" rounded color="primary" nuxt to="/connexion">
        <v-icon left>mdi-account-circle</v-icon> Connexion
      </v-btn>

      <v-menu
        v-if="user"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" icon>
            <v-avatar size="30">
              <img :src="user.photoURL" :alt="user.displayName" />
            </v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img :src="user.photoURL" :alt="user.displayName" />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ user.displayName }}</v-list-item-title>
                <v-list-item-subtitle>
                  La team ✨
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-card-actions>
            <v-btn @click="menu = false" text>Fermer</v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="logout" outlined color="primary">
              Déconnection
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-bottom-navigation
      :input-value="isLoggedIn"
      :value="activeBtn"
      grow
      color="teal"
    >
      <v-btn @click="go('/app')">
        <span>Accueil</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn @click="go('/app/edt')">
        <span>Planning</span>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: 'BeFlex',
      menu: false,
      activeBtn: null
    }
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'auth/isLoggedIn',
      user: 'auth/user'
    })
  },
  methods: {
    go(path) {
      this.$router.push({ path })
    },
    logout() {
      this.$store.dispatch('auth/signOut').then(() => {
        this.menu = false
        this.go('/')
        console.log('logged out 📴')
      })
    }
  }
}
</script>
