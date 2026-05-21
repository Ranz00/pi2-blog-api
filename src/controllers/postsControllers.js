// src/controllers/postsControllers.js
// Controladores HTTP para posts con async/await

import * as postsService from '../services/postsServices.js'
import asyncHandler from '../middlewares/asyncHandler.js'

export const getAll = asyncHandler(async (req, res) => {
  const posts = await postsService.getAll()
  res.json(posts)
})

export const getById = asyncHandler(async (req, res) => {
  const post = await postsService.getById(Number(req.params.id))
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
})

export const getByAuthor = asyncHandler(async (req, res) => {
  const posts = await postsService.getByAuthor(Number(req.params.authorId))
  res.json(posts)
})

export const create = asyncHandler(async (req, res) => {
  const post = await postsService.create(req.body)
  res.status(201).json(post)
})

export const update = asyncHandler(async (req, res) => {
  const post = await postsService.update(Number(req.params.id), req.body)
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
})

export const remove = asyncHandler(async (req, res) => {
  const deleted = await postsService.remove(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Post no encontrado' })
  res.status(204).send()
})
