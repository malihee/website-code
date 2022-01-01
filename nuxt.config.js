import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - website',
    title: 'website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", type: 'text/css', href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" },
      { rel:"stylesheet", type: 'text/css', href: "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" }
    
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/fontawesome',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],
/*
** Nuxt.js modules
*/
modules: [
  
  '@nuxtjs/auth',
  // Doc: https://github.com/nuxt-community/axios-module#usage
  '@nuxtjs/axios',
  // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
  // '@nuxtjs/bulma'
],
// dev: process.env.NODE_ENV !== 'production',

fontawesome: {
  icons: {
    solid: true,
    regular: [],
    light: [],
    duotone: [],
    brands: []
  }
},

auth: {
  strategies: {
    local: {
      token: {
        property: 'token',
        required: true,
        type: 'Bearer'
      },
      user: {
        property: false, // here should be `false`, as you defined in user endpoint `propertyName`
        autoFetch: true
      },
      endpoints: {
        login: {url: 'api/login', method: 'post',  propertyName: 'accessToken' },
        logout: false,
        user: {url: 'api/users', method: 'get', propertyName: false }
      }
    }
  }
},

// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
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
      }
    }
  },

  /*
** axios module configuration
*/
axios: {
  proxy: true
},
proxy: {
  '/api/': { target: 'http://localhost:5000', pathRewrite: { '/api/': '' } }
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  target: 'static'

}
