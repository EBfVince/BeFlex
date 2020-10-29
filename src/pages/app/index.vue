<template>
  <div v-if="user">
    <p class="display-1">Salut {{ user.displayName }} ☀</p>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" xs="12" sm="6" md="4">
          <v-card
            :to="'/app/' + card.url"
            ripple
            nuxt
            @click="openInNewTab(card.open)"
          >
            <v-img
              :src="card.src"
              class="white--text align-end"
              height="200px"
            />

            <v-card-title v-text="card.titre"></v-card-title>

            <v-spacer></v-spacer>

            <v-card-actions>
              <v-btn color="orange" text> Voir </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          url: 'emploi-du-temps',
          titre: 'Emploi du temps 📆',
          src:
            'https://images.unsplash.com/photo-1511871893393-82e9c16b81e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          url: 'supports-de-cours',
          titre: 'Supports de cours 📚',
          src:
            'https://images.unsplash.com/photo-1516979187457-637abb4f9353?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          url: 'rendus',
          titre: 'Rendus 📃',
          src:
            'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=80',
        },
        {
          url: 'bde',
          titre: 'BDE 🎉',
          src:
            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          url: '',
          titre: 'Dossiers de la classe 🤪',
          src:
            'https://images.unsplash.com/photo-1603897251460-7fb99b261610?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
          open:
            'https://drive.google.com/open?id=157F7ZPv3c8tQEsSdg1YZAzE8aJMPrNIe',
        },
      ],
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.authUser
    },
  },
  methods: {
    openInNewTab(open) {
      if (open) {
        window.open(open, '_blank')
      }
    },
  },
  middleware: 'securePage',
}
</script>
