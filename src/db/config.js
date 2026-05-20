// src/db/config.js
// Configuración de la conexión a PostgreSQL usando Pool
// Pool mantiene conexiones reutilizables, más eficiente que Client

import pg from 'pg'

// Extraemos la clase Pool del módulo pg
const { Pool } = pg

/*
  DATABASE_URL viene del archivo .env.
  Ejemplo: postgresql://postgres:root@localhost:5432/miniblog
  Si no está definida, la conexión falla — por eso es obligatoria en .env
*/
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
})

export default pool
