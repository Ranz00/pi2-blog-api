// src/services/postsServices.js
// Servicio de posts con consultas PostgreSQL parametrizadas

import pool from '../db/config.js'

export const getAll = async () => {
  const { rows } = await pool.query('SELECT * FROM posts ORDER BY id')
  return rows
}

export const getById = async (id) => {
  const { rows } = await pool.query('SELECT * FROM posts WHERE id = $1', [id])
  return rows[0] || null
}

export const getByAuthor = async (authorId) => {
  const { rows } = await pool.query(
    'SELECT * FROM posts WHERE author_id = $1',
    [authorId],
  )
  return rows
}

export const create = async (data) => {
  const { title, content, author_id, published } = data
  const { rows } = await pool.query(
    'INSERT INTO posts (title, content, author_id, published) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, content, author_id, published || false],
  )
  return rows[0]
}

export const update = async (id, data) => {
  const { title, content, author_id, published } = data
  const { rows } = await pool.query(
    'UPDATE posts SET title = $1, content = $2, author_id = $3, published = $4 WHERE id = $5 RETURNING *',
    [title, content, author_id, published || false, id],
  )
  return rows[0] || null
}

export const remove = async (id) => {
  const { rowCount } = await pool.query('DELETE FROM posts WHERE id = $1', [id])
  return rowCount > 0
}
