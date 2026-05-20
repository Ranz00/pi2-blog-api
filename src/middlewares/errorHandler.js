// src/middlewares/errorHandler.js
// Middleware global de errores. Express lo detecta por sus 4 parámetros.

const errorHandler = (err, req, res, next) => {
  console.error('[ERROR]', err.message)

  // 23505 = unique violation (email duplicado en PostgreSQL)
  if (err.code === '23505') {
    return res.status(409).json({ error: 'El email ya está registrado' })
  }

  // Si el error tiene status propio lo usamos, si no va 500
  const status = err.status || 500
  res
    .status(status)
    .json({ error: err.message || 'Error interno del servidor' })
}

export default errorHandler
