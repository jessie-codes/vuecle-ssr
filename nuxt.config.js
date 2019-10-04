const axios = require('axios')

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  buildModules: [
    '@nuxtjs/eslint-module'
  ],
  modules: [
    'nuxt-buefy'
  ],
  router: {
    middleware: 'sessions'
  },
  generate: {
    routes: () => {
      return axios.get('http://localhost:3000/api/session').then(({ data }) => {
        return data.map((session) => {
          return `/session/${session.slug}`
        })
      })
    }
  }
}
