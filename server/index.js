const consola = require('consola')
const Hapi = require('@hapi/hapi')
const HapiNuxt = require('@nuxtjs/hapi')
const sessions = require('./sessions.json')

async function start () {
  const server = new Hapi.Server({
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000
  })

  await server.register({
    plugin: HapiNuxt,
    options: {}
  })

  server.route({
    method: 'GET',
    path: '/api/session',
    handler: (request, h) => {
      return sessions
    }
  })

  server.route({
    method: 'GET',
    path: '/api/session/{slug}',
    handler: (request, h) => {
      return sessions.filter((s) => {
        return s.slug === request.params.slug
      })[0]
    }
  })

  await server.start()

  consola.ready({
    message: `Server running at: ${server.info.uri}`,
    badge: true
  })
}

process.on('unhandledRejection', error => consola.error(error))

start()
