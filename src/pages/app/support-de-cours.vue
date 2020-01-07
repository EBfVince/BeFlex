<template>
  <div>
    <v-file-input :loading="loading" v-model="file" label="File input">
    </v-file-input>
    <v-btn @click="upload(yo)">Salut</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      file: null,
      loading: false
    }
  },
  computed: {
    ...mapActions({
      up: 'sdc/addDocument'
    })
  },
  methods: {
    upload() {
      console.log('file', this.file)
      this.loading = true

      const storageRef = this.$fireStorage.ref()
      const sdcFolder = storageRef.child('sdc')
      const fileName = this.file.name
      const docRef = sdcFolder.child(fileName)
      docRef
        .put(this.file)
        .then((snap) => {
          console.log('Uploaded a blob or file!', snap)

          snap.ref.getDownloadURL().then((url) => {
            console.log('url', url)
          })
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
