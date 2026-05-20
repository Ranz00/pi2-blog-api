// tests/api.test.js
// Tests de integración para la API MiniBlog
// Usa vitest (test runner) + supertest (cliente HTTP para Express)
// supertest permite hacer peticiones a app sin que el servidor esté corriendo

import { describe, it, expect } from 'vitest'
import request from 'supertest'
import app from '../src/app.js'

// describe agrupa tests relacionados. it define cada test individual.
describe('Authors API', () => {
  // Test 1: Creación exitosa de un author
  it('POST /authors - crea un author correctamente', async () => {
    // Enviamos una petición POST con datos válidos
    const res = await request(app)
      .post('/authors')
      .send({ name: 'Test User', email: 'test@test.com', bio: 'Bio de test' })

    // Verificamos que responda 201 (Created) y devuelva el objeto creado
    expect(res.status).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe('Test User')
  })

  // Test 2: Listar todos los authors
  it('GET /authors - devuelve un array de authors', async () => {
    const res = await request(app).get('/authors')

    // 200 (OK) y el body debe ser un array
    expect(res.status).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  // Test 3: Obtener un author por ID existente
  it('GET /authors/:id - devuelve un author existente', async () => {
    const res = await request(app).get('/authors/1')

    // Verificamos que el id del body coincida con el solicitado
    expect(res.status).toBe(200)
    expect(res.body).toHaveProperty('id', 1)
  })

  // Test 4: Obtener un author que no existe
  it('GET /authors/:id - devuelve 404 si no existe', async () => {
    const res = await request(app).get('/authors/999')

    // 404 (Not Found) con mensaje de error
    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error')
  })
})

describe('Posts API', () => {
  // Test 5: Validación de campos obligatorios en posts
  it('POST /posts - devuelve 400 si falta el título', async () => {
    const res = await request(app)
      .post('/posts')
      .send({ content: 'Contenido sin título', author_id: 1 })

    // 400 (Bad Request) con array de errores de validación
    expect(res.status).toBe(400)
    expect(res.body).toHaveProperty('errors')
  })
})

describe('Error handling', () => {
  // Test 6: Eliminar un recurso que no existe
  it('DELETE /authors/:id - devuelve 404 si no existe', async () => {
    const res = await request(app).delete('/authors/999')

    // 404 con mensaje de error, igual que GET
    expect(res.status).toBe(404)
    expect(res.body).toHaveProperty('error')
  })
})
