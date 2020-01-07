export const actions = {
  addDocument({ commit }, file) {
    console.log('sdc', file)
    const storageRef = this.$fireStorage.ref()
    const sdcFolder = storageRef.child('sdc')
    const fileName = 'salut.jpg'
    const docRef = sdcFolder.child(fileName)
    docRef.put(file).then((snap) => {
      console.log('Uploaded a blob or file!', snap)
    })
  }
}
