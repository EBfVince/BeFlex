// import colors from 'vuetify/es5/util/colors'

// ajouter seulement `router.base = '/BeFlex/'` si `DEPLOY_ENV` est `GH_PAGES`
const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/BeFlex/'
        }
      }
    : {}

export default {
  //mode: 'universal',
  ssr: false,
  target: 'static',
  srcDir: 'src',

  // buildDir: 'functions/.nuxt',

  /*
   ** Permet de définir l'adresse du serveur en local
   */
  server: {
    // port: 8000, // par défaut: 3000
    // host: '192.168.1.98' // par défaut: localhost
  },

  vue: {
    config: {
      warnHandler: (msg, vm, trace) => {
        if (
          msg ===
          'The .native modifier for v-on is only valid on components but it was used on <div>.'
        ) {
          msg = null
          vm = null
          trace = null
        }
      }
    }
  },

  ...routerBase,

  /**
   * Permet de configurer la librairie PWA
   * Workbox crée automatiquement un service worker (sw.js)
   * Pour ajouter le service worker du plugin nuxt-fire, il faut l'ajouter ici
   */
  pwa: {
    workbox: {
      /* workbox options */
      // dev: true,
      // workboxVersion: '5.0.0-rc.1',
      /* dev: true,
      config: {
        debug: true
      }, */
      // importScripts: ['firebase-auth-sw.js']
      // importScripts: ['salut-sw.js']
    },
    manifest: {
      name: 'BeFlex 🍻',
      short_name: 'BeFlex',
      description: 'BeFlex : la meilleure classe depuis 1905',
      start_url: '/',
      display: 'standalone',
      orientation: 'portrait',
      background_color: '#000000',
      theme_color: '#FFFFFF'
    }
  },

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/assets/main.css'],

  /*
   ** Transitions par défaut entre les pages
   */
  layoutTransition: 'layout',

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      /* dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      } */
    }
  },

  /**
   * Permet de faire tourner du code avant que la page soit rendue
   * ATTENTION : Avec Firebase Hosting ce code n'est pas exécuté !!!
   */
  serverMiddleware: [],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // extractCSS: true,
    // extend(config, ctx) {}
  },

  /*
   ** Nuxt Firebase configuration
   ** https://firebase.nuxtjs.org/
   */
  firebase: {
    config: {
      apiKey: 'AIzaSyC3qpcRaVJVT63YMfIMgNJKRsmtPmEB6VM',
      authDomain: 'bento-vince.firebaseapp.com',
      databaseURL: 'https://bento-vince.firebaseio.com',
      projectId: 'bento-vince',
      storageBucket: 'bento-vince.appspot.com',
      messagingSenderId: '419042376123',
      appId: '1:419042376123:web:f2a4223fcbff6f078b6c9e',
      measurementId: 'G-VL64YPQL57'
    },
    services: {
      auth: {
        // Experimental Feature, use with caution.
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChangedMutation'
        },
        ssr: false
      },
      firestore: true,
      storage: true,
      analytics: true
    }
  }
}
