import colors from 'vuetify/es5/util/colors'



export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - disqus',
    title: 'disqus',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: "~/plugins/disqus/index.js", mode: 'client' },
    // { src: "~/plugins/tiptapeditor/index.js", mode: 'client' },
    // { src: "~/plugins/bunny/index.js", mode: 'client' },
    { src: "~/plugins/nhost/index.js", mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],


  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://.hasura.ap-south-1.nhost.run/v1/graphql', // Replace with your GraphQL endpoint,
        httpLinkOptions: {
          credentials: 'include'
        }
      }
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo'
  ],
  // transpileDependencies: ["vuetify", "@peepi/vuetify-tiptap"],

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

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config) {
      config.module.rules.push({
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      })
    },
  }

}

