const webpack = require("webpack");

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'SportyBet Nigeria',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&family=Roboto:wght@100&display=swap",
      },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800&display=swap"
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/core.css',
    '~/assets/css/style.css',
    "bootstrap-vue/dist/bootstrap-vue.css",
    'bootstrap/dist/css/bootstrap.css',
    'bootstrap-icons/font/bootstrap-icons.css',
    '~/assets/icofont/icofont.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/bootstrap.js',
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js", mode: "client" },
    "~/plugins/utils.js",
    { src: "~/plugins/vuex-persist.js", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
    "@nuxtjs/auth-next",
    "@nuxtjs/moment",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NODE_ENV !== 'production' ? 'https://citybet.bet/api' : 'https://citybet.bet/api'
  },

  loading: '~/components/Loading.vue',

  //auth
  auth: {
    strategies: {
      local: {
        scheme: "refresh",
        localStorage: {
          prefix: "auth.",
        },
        token: {
          prefix: "token.",
          property: "token",
          // maxAge: 1800,
          global: true,
        },
        user: {
          property: 'user',
          // autoFetch: false,
        },
        refreshToken: {
          prefix: "refresh_token.",
          property: "token",
        },
        endpoints: {
          login: { url: "/auth/login", method: "post" },
          logout: { url: "/auth/logout", method: "get" },
          // refresh: { url: "/refresh", method: "post" },
          user: { url: "/auth/details", method: "get" },
        },
      },
    },
    redirect: {
      login: "/auth/login",
      logout: "/",
      home: "/",
    },
    // plugins: ['~/plugins/auth.js']
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {},
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery",
        "window.jQuery": "jquery",
      }),
    ],
  },

  generate: {
    fallback: true
  },
  target: "static",
  ssr: false
}
