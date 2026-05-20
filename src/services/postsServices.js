// src/services/postsServices.js
// Servicio de posts con datos en memoria (temporal)
// TODO: migrar a consultas PostgreSQL usando pool.query()

let posts = [
  {
    id: 1,
    title: 'Introducción a Node.js',
    content: 'Node.js es un runtime de JavaScript...',
    author_id: 1,
    published: true,
  },
  {
    id: 2,
    title: 'PostgreSQL vs MySQL',
    content: 'Ambas bases de datos tienen ventajas...',
    author_id: 2,
    published: true,
  },
  {
    id: 3,
    title: 'APIs RESTful',
    content: 'REST es un estilo arquitectónico...',
    author_id: 1,
    published: true,
  },
]

let nextId = 4

export const getAll = () => posts

export const getById = (id) => posts.find((p) => p.id === id)

export const getByAuthor = (authorId) =>
  posts.filter((p) => p.author_id === authorId)

export const create = (data) => {
  const post = { id: nextId++, ...data }
  posts.push(post)
  return post
}

export const update = (id, data) => {
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return null
  posts[index] = { ...posts[index], ...data }
  return posts[index]
}

export const remove = (id) => {
  const index = posts.findIndex((p) => p.id === id)
  if (index === -1) return false
  posts.splice(index, 1)
  return true
}
