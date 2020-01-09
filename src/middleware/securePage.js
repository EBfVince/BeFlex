export default function({ store, redirect }) {
  if (!store.getters['auth/isLoggedIn']) {
    redirect('/connexion')
    /* error({
      message: 'You are not connected',
      statusCode: 403
    }) */
  }
}
