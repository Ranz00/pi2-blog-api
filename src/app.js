// src/app.js
// Configuración de Express: middlewares globales y montaje de rutas

import express from 'express'
import cors from 'cors'
import errorHandler from './middlewares/errorHandler.js'
import indexRouter from './routes/index.js'
import authorsRouter from './routes/authorsRouter.js'
import postsRouter from './routes/postsRouter.js'

const app = express()

app.use(cors()) // Permite peticiones desde el frontend (otros dominios)
app.use(express.json()) // Convierte el body de las requests a objeto JS

// Rutas de la API
app.use('/', indexRouter)
app.use('/authors', authorsRouter)
app.use('/posts', postsRouter)

// Middleware de errores (siempre al final)
app.use(errorHandler)

export default app
