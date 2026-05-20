// src/services/authorsServices.js
// Servicio de authors con consultas PostgreSQL parametrizadas

import pool from '../db/config.js'

export const getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM authors ORDER BY id')
  return rows
}

export const getById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM authors WHERE id = $1', [id])
  return rows[0] || null
}

export const create = async (data) => {
  const { name, email, bio } = data
  const { rows } = await pool.query(
    'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
    [name, email, bio || null],
  )
  return rows[0]
}

export const update = async (id, data) => {
  const { name, email, bio } = data
  const { rows } = await pool.query(
    'UPDATE authors SET name = $1, email = $2, bio = $3 WHERE id = $4 RETURNING *',
    [name, email, bio || null, id],
  )
  return rows[0] || null
}

export const remove = async (id) => {
  const { rowCount } = await pool.query('DELETE FROM authors WHERE id = $1', [
    id,
  ])
  return rowCount > 0
}
