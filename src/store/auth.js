import { isNil } from 'lodash'
import UsersDB from '@/firebase/users-db'

function initialState() {
  return {
    authUser: null,
    user: null
  }
}

export const state = initialState

export const mutations = {
  /**
   * Permet de réinitialiser le state a sa version d'origine
   * Utile quand on déconnecte un utilisateur
   */
  resetStore(state) {
    // acquire initial state
    const s = initialState()
    Object.keys(s).forEach((key) => {
      state[key] = s[key]
    })
  },

  /**
   * Permet de set les infos du authUser dans le state
   */
  seAuthUser(state, authUser) {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  },

  setUser(state, user) {
    state.user = {
      id: user.id,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
  }
}

export const getters = {
  /**
   * Permet de savoir si un utilisateur est connecté ou pas.
   */
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch (err) {
      return false
    }
  },

  user: (state) => {
    return state.user
  }
}

export const actions = {
  async signIn({ commit }, firebaseAuthUser) {
    commit('seAuthUser', firebaseAuthUser)

    console.log('yo')
    try {
      const salut = await this.$fireStore
        .collection('yo')
        .doc('xpBxH065qzgD4j3T7UP8')
        .get()
      console.log('yo 1', salut)
    } catch (e) {
      console.error(e)
    }

    const db = new UsersDB(this.$fireStore)
    console.log('yo 2', firebaseAuthUser.uid)
    const userFromFirebase = await db.read(firebaseAuthUser.uid)
    console.log('yo 3', userFromFirebase)

    const user = isNil(userFromFirebase)
      ? await db.createUser(firebaseAuthUser)
      : userFromFirebase

    commit('setUser', user)
  },

  /**
   * Permet de déconnecter l'utilisateur et remettre le state à l'initial
   */
  signOut({ commit }) {
    this.$fireAuth
      .signOut()
      .then(() => {
        commit('resetStore')
      })
      .catch((err) => {
        console.error('Erreur', err)
        alert(err)
      })
  }
}
