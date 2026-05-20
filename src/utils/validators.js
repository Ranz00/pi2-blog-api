// Middleware de validación para datos de autores y posts

const validateAuthor = (req, res, next) => {
  const { name, email } = req.body
  const errors = []
  if (!name || !name.trim()) errors.push('El nombre es obligatorio')
  if (!email || !email.trim()) errors.push('El email es obligatorio')
  if (errors.length > 0) return res.status(400).json({ errors })
  next()
}

const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body
  const errors = []
  if (!title || !title.trim()) errors.push('El título es obligatorio')
  if (!content || !content.trim()) errors.push('El contenido es obligatorio')
  if (!author_id) errors.push('El author_id es obligatorio')
  if (errors.length > 0) return res.status(400).json({ errors })
  next()
}

module.exports = { validateAuthor, validatePost }
