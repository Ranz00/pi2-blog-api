// src/db/config.js
// Configuración de la conexión a PostgreSQL usando Pool
// Pool mantiene conexiones reutilizables, más eficiente que Client

import 'dotenv/config'
import pg from 'pg'

const { Pool } = pg

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default pool
