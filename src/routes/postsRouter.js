// src/routes/postsRouter.js
// Rutas REST para posts: CRUD completo + filtro por author

import { Router } from 'express'
import {
  getAll,
  getById,
  getByAuthor,
  create,
  update,
  remove,
} from '../controllers/postsControllers.js'
import { validatePost } from '../utils/validators.js'

const router = Router()

router.get('/', getAll)
router.get('/:id', getById)
router.get('/author/:authorId', getByAuthor)
router.post('/', validatePost, create)
router.put('/:id', validatePost, update)
router.delete('/:id', remove)

export default router
