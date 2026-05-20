// src/routes/index.js
// Ruta raíz de la API

import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a MiniBlog API' })
})

export default router
