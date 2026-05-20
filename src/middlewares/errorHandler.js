// src/middlewares/errorHandler.js
/*
  Middleware global de manejo de errores.
  Express lo detecta automáticamente porque tiene 4 parámetros.
  Se ejecuta cuando una ruta llama a next(err) o cuando ocurre una excepción.
*/

const errorHandler = (err, req, res, next) => {
  // Mostramos el error en consola para poder debuggear
  console.error('[ERROR]', err.stack)

  /*
    Código 23505 de PostgreSQL = violación de restricción UNIQUE.
    Ocurre cuando intentamos crear un author con un email que ya existe.
    Respondemos 409 (Conflict) en lugar de 500 porque el error es del cliente,
    no del servidor.
  */
  if (err.code === '23505') {
    return res
      .status(409)
      .json({ error: 'El email ingresado ya está registrado' })
  }

  /*
    Si el error tiene una propiedad .status, la usamos.
    Si no, asumimos 500 (Internal Server Error).
    Esto permite que los services puedan hacer:
      const error = new Error('No encontrado')
      error.status = 404
      throw error
  */
  const status = err.status || 500
  res.status(status).json({
    error: err.message || 'Error interno del servidor',
  })
}

export default errorHandler
