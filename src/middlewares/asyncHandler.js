// src/middlewares/asyncHandler.js
// Wrapper para capturar errores en controladores async
// Express 4 no captura promesas rechazadas automáticamente

const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

export default asyncHandler
