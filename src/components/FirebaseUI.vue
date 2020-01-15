<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import { desktop as isDesktop } from 'is_js'

export default {
  name: 'Login',

  mounted() {
    if (isDesktop()) {
      console.log('desktop')
    } else {
      console.log('no desktop')
    }

    if (process.browser) {
      const firebaseui = require('firebaseui')
      const firebase = require('firebase/app')

      const ui =
        firebaseui.auth.AuthUI.getInstance() ||
        new firebaseui.auth.AuthUI(this.$fireAuth)

      const authProviders = {
        Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        Email: firebase.auth.EmailAuthProvider.PROVIDER_ID
      }

      // Firebase signin with popup is faster than redirect
      // but we can't use it on mobile because it's not well supported
      const method = isDesktop() ? 'popup' : 'redirect'

      const config = {
        credentialHelper: firebaseui.auth.CredentialHelper.NONE,
        signInOptions: [authProviders.Google], // , authProviders.Email
        signInFlow: method,
        tosUrl: '/tos',
        privacyPolicyUrl: '/privacy-policy',
        callbacks: {
          signInSuccessWithAuthResult: this.signInResult
        }
      }
      ui.disableAutoSignIn()
      if (this.$store.state.authUser) {
        this.openAppPage()
      } else {
        ui.start('#firebaseui-auth-container', config)
      }
    }
  },
  methods: {
    signInResult(authResult, redirectUrl) {
      this.openAppPage()
      return false
    },
    openAppPage() {
      this.$router.push({
        // path: '/creation-compte'
        path: '/app'
      })
    }
  }
}
</script>
<style src="~~/node_modules/firebaseui/dist/firebaseui.css"></style>
