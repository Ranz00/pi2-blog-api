/*
  Punto de entrada del servidor.
  Importa la app configurada y la pone a escuchar en un puerto.
  Las variables de entorno se cargan desde .env gracias a dotenv.
*/

const app = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`[MiniBlog API] Servidor corriendo en http://localhost:${PORT}`)
})
