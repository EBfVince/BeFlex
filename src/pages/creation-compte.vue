<template>
  <div>
    <v-card class="mb-10">
      <v-img
        src="https://images.unsplash.com/photo-1575015642299-5b92fcbd0ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
        height="200"
        class="grey darken-4"
      ></v-img>
      <v-card-title class="title">Crée ton compte</v-card-title>
    </v-card>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="prenom"
        label="Prénom"
        append-icon="mdi-account"
        outlined
        required
      ></v-text-field>

      <v-text-field
        v-model="nom"
        label="Nom"
        append-icon="mdi-account-outline"
        outlined
        required
      ></v-text-field>

      <v-select
        v-model="niveau"
        :items="items"
        :item-text="(item) => item.nom"
        :rules="[(v) => !!v || 'Item is required']"
        :return-object="true"
        @change="getClasses"
        label="Niveau"
        required
      ></v-select>

      <v-select
        v-model="classe"
        :disabled="niveau === ''"
        :items="items2"
        :item-text="(yo) => yo.nom"
        :rules="[(v) => !!v || 'Item is required']"
        :return-object="true"
        label="Classe"
        required
      ></v-select>

      <v-btn @click="validate" :disabled="!valid" color="success" class="mr-4">
        Enregistrer
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import NiveauxClassesDB from '@/firebase/niveaux-classes-db'
import NiveauxDB from '@/firebase/niveaux-db'

export default {
  data() {
    return {
      prenom: '',
      nom: '',
      niveau: '',
      classe: '',
      items: [],
      items2: [],
      items3: [], // todo option
      valid: true
    }
  },
  mounted() {
    this.getNiveaux()
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        console.log('validate', this.prenom, this.nom, this.classe, this.niveau)
        const userId = this.$store.getters['auth/user'].id
        this.$fireStore
          .collection('users')
          .doc(userId)
          .set(
            {
              prenom: this.prenom,
              nom: this.nom,
              classe: {
                nom: this.classe.nom,
                id: this.classe.id
              },
              niveau: {
                nom: this.niveau.nom,
                id: this.niveau.id
              }
            },
            { merge: true }
          )
          .finally(() => {
            this.$router.push({ path: '/app' })
          })
      }
    },
    getNiveaux() {
      this.items = []
      const db = new NiveauxDB(this.$fireStore)
      db.readAll().then((snap) => {
        snap.forEach((doc) => {
          this.items.push(doc)
        })
      })
      /* this.$fireStore
        .collection('niveaux')
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            console.log('data', doc)
            this.items.push(doc)
          })
        }) */
    },
    getClasses() {
      this.items2 = []
      const db = new NiveauxClassesDB(this.niveau.id, this.$fireStore)
      db.readAll().then((yop) => {
        yop.forEach((ok) => {
          this.items2.push(ok)
        })
      })
      /*
      this.$fireStore
        .collection('niveaux')
        .where('nom', '==', this.niveau)
        .get()
        .then((snap) => {
          snap.forEach((doc) => {
            doc
              .collection('classes')
              .get()
              .then((snap2) => {
                snap2.forEach((doc2) => {
                  this.items2.push(doc2.data())
                })
              })
            doc
              .collection('options')
              .get()
              .then((snap2) => {
                snap2.forEach((doc2) => {
                  this.items3.push(doc2.data())
                })
              })
          })
        }) */
    }
  }
}
</script>

<style>
.salut {
  max-width: 300px;
}
</style>
