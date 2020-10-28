export const actions = {
  /**
   * Cette méthode est appellée à chaque initialisation de Vuex
   * Elle permet de mettre en place l'utilisateur connecté quand on reload la page
   */
  /* nuxtServerInit({ commit }, ctx) {
    const ssrVerifiedAuthUser = ctx.res.verifiedFireAuthUser
    if (ssrVerifiedAuthUser) {
      commit('auth/seAuthUser', ssrVerifiedAuthUser)
    }
  }, */

  /**
   * Est appelé par la librarie nuxt-fire
   * Permet de sauver l'utilisateur dans le state qu'on il vient de se connecter
   */
  onAuthStateChangedMutation({ dispatch }, { authUser, claims }) {
    if (authUser && claims) {
      dispatch('auth/signIn', { authUser, claims })
    } else {
      // TODO faire la déconnexion
    }
  }
}
