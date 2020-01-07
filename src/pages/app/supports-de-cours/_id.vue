<template>
  <div>
    <div class="yo">
      <v-file-input :loading="loading" v-model="file" label="File input" />
      <v-btn :loading="loading" :disabled="file === null" @click="upload(yo)"
        >Envoyer</v-btn
      >
    </div>

    <v-container>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" class="d-flex" cols="12">
          <v-card @click="downloadFile(card)" class="flex-grow-1" ripple>
            <v-card-text>
              <v-icon>mdi-xbox-controller</v-icon> {{ card.name }}
            </v-card-text>
          </v-card>
          <v-btn
            @click="deleteFile(card)"
            icon
            color="red"
            class="align-self-center ml-2"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbarDisplay">
      {{ snackbarText }}
      <v-btn @click="snackbarDisplay = false" color="pink" text>
        Fermer
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: null,
      loading: false,
      snackbarDisplay: false,
      snackbarText: 'null',
      cards: []
    }
  },
  mounted() {
    this.getFiles()
  },
  methods: {
    upload() {
      if (this.file === null) {
        return
      }

      console.log('file', this.file)
      this.loading = true

      const storageRef = this.$fireStorage.ref()
      const sdcFolder = storageRef.child('sdc/' + this.$route.params.id)
      const fileName = this.file.name
      const docRef = sdcFolder.child(fileName)
      docRef
        .put(this.file)
        .then((snap) => {
          this.snackbarText = 'Ok, fichier envoyé ✔'
          this.snackbarDisplay = true
          console.log('Uploaded a blob or file! ✔', snap)
        })
        .catch((e) => {
          this.snackbarText = 'Une erreur est survenue'
          this.snackbarDisplay = true
          console.error("Erreur lors de l'upload", e)
        })
        .finally(() => {
          this.loading = false
          this.getFiles()
        })
    },
    getFiles() {
      console.log('ok')
      this.cards = []
      const storageRef = this.$fireStorage.ref()
      storageRef
        .child('sdc/' + this.$route.params.id)
        .listAll()
        .then((res) => {
          res.items.forEach((itemRef) => {
            itemRef
              .getMetadata()
              .then((meta) => {
                console.log('item meta', meta)
                this.cards.push(meta)
              })
              .catch((e) => {
                console.error(
                  "Erreur lors de la récupération des metadata d'un fichier",
                  e
                )
              })
          })
        })
        .catch((e) => {
          console.error('Erreur lors de la récupération des fichiers', e)
        })
    },
    downloadFile(meta) {
      meta.ref.getDownloadURL().then((url) => {
        window.open(url, '_blank')
      })
    },
    deleteFile(meta) {
      meta.ref
        .delete()
        .then(() => {
          this.snackbarText = 'Fichier supprimé ✔'
          this.snackbarDisplay = true
        })
        .catch((error) => {
          this.snackbarText = 'Une erreur est survenue'
          this.snackbarDisplay = true
          console.error("Erreur lors de la suppression d'un fichier", error)
        })
        .finally(() => {
          this.getFiles()
        })
    }
  }
}
</script>

<style>
.yo {
  margin-bottom: 20px;
}
</style>
