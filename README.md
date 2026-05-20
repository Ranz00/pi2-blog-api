# MiniBlog API

API REST para gestionar autores y publicaciones — Node.js + Express + PostgreSQL.

## Requisitos

Node.js v18+, PostgreSQL, npm

## Ejecutar local

```bash
git clone <url>
cd pi2-blog-api
npm install
psql -U postgres -c "CREATE DATABASE miniblog;"
psql -U postgres -d miniblog -f src/db/setup.sql
psql -U postgres -d miniblog -f src/db/seed.sql
Crear .env (ver .env.example):

DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/miniblog
PORT=3000
npm run dev    # Servidor en http://localhost:3000
Endpoints
Authors
GET /authors | GET /authors/:id | POST /authors | PUT /authors/:id | DELETE /authors/:id

Posts
GET /posts | GET /posts/:id | GET /posts/author/:authorId | POST /posts | PUT /posts/:id | DELETE /posts/:id

Tests
npm test
Documentación
Con el servidor corriendo: http://localhost:3000/api-docs

Variables de entorno
DATABASE_URL — conexión a PostgreSQL PORT — puerto del servidor (default 3000)

Deploy en Railway
Crear proyecto en Railway y conectar repo de GitHub
Agregar plugin PostgreSQL (genera DATABASE_URL automáticamente)
Railway usa el script "start" de package.json y despliega automáticamente
La URL pública aparece en el dashboard
Uso de AI
Este proyecto usó Claude y OpenCode para generar estructura, controllers, services, tests, documentación OpenAPI y resolver errores
```
