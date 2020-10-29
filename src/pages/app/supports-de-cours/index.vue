<template>
  <div>
    <h1>Cours</h1>
    <p>
      Cette page nous permet d'accéder rapidement à nos supports de cours etc...
    </p>
    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" xs="12" sm="6" md="4">
          <v-card :to="'/app/supports-de-cours/' + card.id" ripple nuxt>
            <v-img
              :src="card.src"
              class="white--text align-end"
              height="200px"
            />

            <v-card-title v-text="card.titre"></v-card-title>
            <v-card-subtitle class="pb-0" v-text="card.prof"></v-card-subtitle>

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
          id: 1,
          titre: 'Plan Financier',
          prof: 'Bancquart François',
          src:
            'https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 2,
          titre: 'Branding',
          prof: 'Garcia Alexandre',
          src:
            'https://images.unsplash.com/photo-1517602302552-471fe67acf66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 3,
          titre: 'Stratégie de Com',
          prof: 'Bastide Marie',
          src:
            'https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 4,
          titre: 'Anglais',
          prof: 'Sifflet Baptiste',
          src:
            'https://images.unsplash.com/photo-1534595616011-4b326e38944f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
        {
          id: 5,
          titre: 'Digital Humanities',
          prof: 'Vincent Florian',
          src:
            'https://images.unsplash.com/photo-1564429238817-393bd4286b2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80',
        },
      ],
    }
  },
}
</script>
