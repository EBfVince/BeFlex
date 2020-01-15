<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" @click="go('/')" />
      <v-spacer />

      <v-menu
        v-if="isLoggedIn"
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" @click="notif" icon>
            <v-badge :value="badge" offset-x="6" offset-y="6" color="pink" dot>
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>Notifications</v-card-title>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://scontent.fcdg1-1.fna.fbcdn.net/v/t1.0-1/73399922_1625162904292464_7710667323794784256_o.jpg?_nc_cat=100&_nc_ohc=dScHy39vwwoAX93Z2nK&_nc_ht=scontent.fcdg1-1.fna&oh=b178e610fadd6d6ddda29b64a7137775&oe=5E8FCC26"
                  alt="Antho"
                />
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>Antho paye sa tournée 🍻</v-list-item-title>
                <v-list-item-subtitle>
                  Merci mec 👌
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>

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
            <v-avatar v-if="user.photoURL" size="30">
              <img :src="user.photoURL" :alt="user.displayName" />
            </v-avatar>
            <v-icon v-else>mdi-account-circle</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar v-if="user.photoURL">
                <img :src="user.photoURL" :alt="user.displayName" />
              </v-list-item-avatar>
              <v-list-item-icon v-else>
                <v-icon>mdi-account-circle</v-icon>
              </v-list-item-icon>

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
      app
      color="teal"
      fixed
    >
      <v-btn @click="go('/app')" style="height:100%;">
        <span>Accueil</span>
        <v-icon>mdi-firebase</v-icon>
      </v-btn>

      <v-btn @click="go('/app/emploi-du-temps')" style="height:100%;">
        <span>Planning</span>
        <v-icon>mdi-calendar</v-icon>
      </v-btn>

      <v-btn @click="go('/app/supports-de-cours')" style="height:100%;">
        <span>Cours</span>
        <v-icon>mdi-book-open-page-variant</v-icon>
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
      menu2: false,
      badge: true,
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
    },
    notif() {
      this.badge = false
    }
  }
}
</script>

<style>
.yo {
  height: 40px;
}
</style>
