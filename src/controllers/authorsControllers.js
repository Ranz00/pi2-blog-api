// src/controllers/authorsControllers.js
// Controladores HTTP para authors con async/await

import * as authorsService from '../services/authorsServices.js'

export const getAll = async (req, res) => {
  const authors = await authorsService.getAll()
  res.json(authors)
}

export const getById = async (req, res) => {
  const author = await authorsService.getById(Number(req.params.id))
  if (!author) return res.status(404).json({ error: 'Author no encontrado' })
  res.json(author)
}

export const create = async (req, res) => {
  const author = await authorsService.create(req.body)
  res.status(201).json(author)
}

export const update = async (req, res) => {
  const author = await authorsService.update(Number(req.params.id), req.body)
  if (!author) return res.status(404).json({ error: 'Author no encontrado' })
  res.json(author)
}

export const remove = async (req, res) => {
  const deleted = await authorsService.remove(Number(req.params.id))
  if (!deleted) return res.status(404).json({ error: 'Author no encontrado' })
  res.status(204).send()
}
