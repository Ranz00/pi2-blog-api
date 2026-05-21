// tests/api.test.js
// Tests de integración para la API MiniBlog
// Usa vitest + supertest para probar los endpoints HTTP

import { describe, it, expect, afterAll } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'
import pool from '../src/db/config.js'

// Timeout más largo para conexión a BD en Railway
const TIMEOUT = 15000

describe('Authors API', () => {
  it('POST /authors - crea un author correctamente', async () => {
    const email = `test-${Date.now()}@test.com`
    const res = await request(app)
      .post('/authors')
      .send({ name: 'Test User', email, bio: 'Bio de test' })

    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe('Test User')
  }, TIMEOUT)

  it('GET /authors - devuelve un array de authors', async () => {
    const res = await request(app).get('/authors')

    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  }, TIMEOUT)

  it('GET /authors/:id - devuelve un author existente', async () => {
    const res = await request(app).get('/authors/1')

    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('id', 1)
  }, TIMEOUT)

  it('GET /authors/:id - devuelve 404 si no existe', async () => {
    const res = await request(app).get('/authors/999')

    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error')
  }, TIMEOUT)
})

describe('Posts API', () => {
  it('POST /posts - devuelve 400 si falta el título', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ content: 'Contenido sin título', author_id: 1 })

    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('errors')
  }, TIMEOUT)
})

afterAll(async () => {
  await pool.end()
})

describe('Error handling', () => {
  it('DELETE /authors/:id - devuelve 404 si no existe', async () => {
    const res = await request(app).delete('/authors/999')

    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error')
  }, TIMEOUT)
})
