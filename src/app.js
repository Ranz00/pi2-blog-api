/*
  Configuración principal de la aplicación Express.
  Acá se definen middlewares globales y se montan las rutas.
*/

const express = require('express')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const indexRouter = require('./routes/index')
const authorsRouter = require('./routes/authorsRouter')
const postsRouter = require('./routes/postsRouter')

const app = express()

// Middlewares globales
app.use(cors()) // Permite peticiones desde otros dominios (frontend)
app.use(express.json()) // Convierte el body de las requests a JSON automáticamente

// Rutas
app.use('/', indexRouter)
app.use('/authors', authorsRouter)
app.use('/posts', postsRouter)

// Middleware de errores (va AL FINAL después de las rutas)
app.use(errorHandler)

module.exports = app
