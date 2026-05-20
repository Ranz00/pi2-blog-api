// src/utils/validators.js
/*
  Middleware de validación para datos de entrada.
  Se ejecutan antes que el controller correspondiente.
  Si hay errores, responden con 400 y NO pasan al controller.
*/

// Valida que name y email no estén vacíos para crear/actualizar un author
export const validateAuthor = (req, res, next) => {
  const { name, email } = req.body
  const errors = []

  // .trim() saca espacios al inicio y final para evitar "   " como válido
  if (!name || !name.trim()) {
    errors.push('El nombre es obligatorio')
  }

  if (!email || !email.trim()) {
    errors.push('El email es obligatorio')
  }

  // Si hay errores, cortamos acá con 400 y no llamamos a next()
  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  // Todo bien, pasamos al siguiente middleware (el controller)
  next()
}

// Valida que title, content y author_id estén presentes para crear/actualizar un post
export const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body
  const errors = []

  if (!title || !title.trim()) {
    errors.push('El título es obligatorio')
  }

  if (!content || !content.trim()) {
    errors.push('El contenido es obligatorio')
  }

  if (!author_id) {
    errors.push('El author_id es obligatorio')
  }

  if (errors.length > 0) {
    return res.status(400).json({ errors })
  }

  next()
}
