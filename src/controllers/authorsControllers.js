// src/controllers/authorsControllers.js
// Controladores HTTP para authors. Cada uno llama al service y responde con status code.

import * as authorsService from '../services/authorsServices.js'

export const getAll = (req, res) => {
  const authors = authorsService.getAll()
  res.json(authors)
}

export const getById = (req, res) => {
  const author = authorsService.getById(Number(req.params.id))
  if (!author) return res.status(404).json({ error: 'Author no encontrado' })
  res.json(author)
}

export const create = (req, res) => {
  const author = authorsService.create(req.body)
  res.status(201).json(author)
}

export const update = (req, res) => {
  const author = authorsService.update(Number(req.params.id), req.body)
  if (!author) return res.status(404).json({ error: 'Author no encontrado' })
  res.json(author)
}

export const remove = (req, res) => {
  const deleted = authorsService.remove(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Author no encontrado' })
  res.status(204).send()
}
