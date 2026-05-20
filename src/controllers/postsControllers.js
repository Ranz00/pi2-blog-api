// src/controllers/postsControllers.js
// Controladores HTTP para posts con async/await

import * as postsService from '../services/postsServices.js'

export const getAll = async (req, res) => {
  const posts = await postsService.getAll()
  res.json(posts)
}

export const getById = async (req, res) => {
  const post = await postsService.getById(Number(req.params.id))
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
}

export const getByAuthor = async (req, res) => {
  const posts = await postsService.getByAuthor(Number(req.params.authorId))
  res.json(posts)
}

export const create = async (req, res) => {
  const post = await postsService.create(req.body)
  res.status(201).json(post)
}

export const update = async (req, res) => {
  const post = await postsService.update(Number(req.params.id), req.body)
  if (!post) return res.status(404).json({ error: 'Post no encontrado' })
  res.json(post)
}

export const remove = async (req, res) => {
  const deleted = await postsService.remove(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Post no encontrado' })
  res.status(204).send()
}
