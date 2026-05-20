// src/routes/authorsRouter.js
// Rutas REST para authors: CRUD completo con validación de datos

import { Router } from 'express'
import {
  getAll,
  getById,
  create,
  update,
  remove,
} from '../controllers/authorsControllers.js'
import { validateAuthor } from '../utils/validators.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.post('/', validateAuthor, create)
router.put('/:id', validateAuthor, update)
router.delete('/:id', remove)

export default router
