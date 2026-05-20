// src/server.js
// Punto de entrada del servidor. Arranca la app en el puerto configurado.

import 'dotenv/config'
import app from './app.js'

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`[MiniBlog API] Servidor corriendo en http://localhost:${PORT}`)
})
