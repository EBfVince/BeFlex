import GenericDB from './generic-db'

export default class NiveauxDB extends GenericDB {
  constructor(firestore) {
    super(`niveaux`, firestore)
  }

  // Here you can extend UserProductsDB with custom methods
}
