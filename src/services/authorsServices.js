// src/services/authorsServices.js
// Servicio de authors con datos en memoria (temporal)
// TODO: migrar a consultas PostgreSQL usando pool.query()

let authors = [
  {
    id: 1,
    name: 'Ana García',
    email: 'ana@example.com',
    bio: 'Desarrolladora full-stack',
  },
  {
    id: 2,
    name: 'Carlos Ruiz',
    email: 'carlos@example.com',
    bio: 'Escritor técnico',
  },
  {
    id: 3,
    name: 'María López',
    email: 'maria@example.com',
    bio: 'Ingeniera de software',
  },
]

let nextId = 4

export const getAll = () => authors

export const getById = (id) => authors.find((a) => a.id === id)

export const create = (data) => {
  const author = { id: nextId++, ...data }
  authors.push(author)
  return author
}

export const update = (id, data) => {
  const index = authors.findIndex((a) => a.id === id)
  if (index === -1) return null
  authors[index] = { ...authors[index], ...data }
  return authors[index]
}

export const remove = (id) => {
  const index = authors.findIndex((a) => a.id === id)
  if (index === -1) return false
  authors.splice(index, 1)
  return true
}
