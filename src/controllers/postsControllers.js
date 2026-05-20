// src/controllers/postsControllers.js
// Controladores HTTP para posts. Incluye filtro por author.

import * as postsService from '../services/postsServices.js'

export const getAll = (req, res) => {
  const posts = postsService.getAll()
  res.json(posts)
}

export const getById = (req, res) => {
  const post = postsService.getById(Number(req.params.id))
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
}

export const getByAuthor = (req, res) => {
  const posts = postsService.getByAuthor(Number(req.params.authorId))
  res.json(posts)
}

export const create = (req, res) => {
  const post = postsService.create(req.body)
  res.status(201).json(post)
}

export const update = (req, res) => {
  const post = postsService.update(Number(req.params.id), req.body)
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
}

export const remove = (req, res) => {
  const deleted = postsService.remove(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Post no encontrado' })
  res.status(204).send()
}
