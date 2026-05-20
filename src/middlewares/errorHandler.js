/*
  Middleware global de manejo de errores.
  Express lo reconoce porque tiene 4 parámetros (err, req, res, next).
  Se ejecuta cuando cualquier middleware o ruta llama a next(err).
*/

const errorHandler = (err, req, res, next) => {
  // Mostramos el error en consola para debuggear
  console.error('[ERROR]', err.stack)

  // Código 23505 = violación de UNIQUE constraint en PostgreSQL
  // Ocurre cuando intentamos crear un author con un email que ya existe
  if (err.code === '23505') {
    return res
      .status(409)
      .json({ error: 'El email ingresado ya está registrado' })
  }

  // Si el error tiene un código HTTP propio lo usamos, si no va 500
  const status = err.status || 500
  res.status(status).json({
    error: err.message || 'Error interno del servidor',
  })
}

module.exports = errorHandler
