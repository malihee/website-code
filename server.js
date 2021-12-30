const { Nuxt, Builder } = require('nuxt')
// const app = require('express')()
const port = process.env.PORT || 5000

// We instantiate Nuxt with the options
const config = require('./nuxt.config.js')
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  new Builder(nuxt).build()
}

// Listen the server
// app.listen(port, '0.0.0.0').then(() => {
  console.log(`Server is listening on port: ${port}`)
// })
// ----------------------------------------------
// const jsonServer = require('json-server')
// const auth = require('json-server-auth')

// const app = jsonServer.create()
// const router = jsonServer.router('db.json')

// // /!\ Bind the router db to the app
// app.db = router.db

// // You must apply the auth middleware before the router
// app.use(auth)
// app.use(router)
// app.listen(5000)
// console.log('its ok');