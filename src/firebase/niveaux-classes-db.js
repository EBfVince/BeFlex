import GenericDB from './generic-db'

export default class NiveauxClassesDB extends GenericDB {
  constructor(niveauxId, firestore) {
    super(`niveaux/${niveauxId}/classes`, firestore)
  }

  // Here you can extend UserProductsDB with custom methods
}
