# MiniBlog API

API REST para gestionar autores y publicaciones — Node.js + Express + PostgreSQL.

## Requisitos

- Node.js v18 o superior
- PostgreSQL instalado y corriendo
- npm

## Ejecutar local

```bash
git clone <url-del-repo>
cd pi2-blog-api
npm install
```

Crear base de datos y cargar datos:

```bash
psql -U postgres -c "CREATE DATABASE miniblog;"
psql -U postgres -d miniblog -f src/db/setup.sql
psql -U postgres -d miniblog -f src/db/seed.sql
```

Configurar `.env` (ver `.env.example`):

```
DATABASE_URL=postgresql://postgres:tu_password@localhost:5432/miniblog
PORT=3000
```

Iniciar servidor:

```bash
npm run dev
```

La API se ejecuta en `http://localhost:3000`.

## Deploy en Railway

URL pública: [https://pi2-blog-api-production.up.railway.app](https://pi2-blog-api-production.up.railway.app)

## Endpoints

### Authors

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /authors | Listar todos los autores |
| GET | /authors/:id | Obtener un autor por ID |
| POST | /authors | Crear un autor |
| PUT | /authors/:id | Actualizar un autor |
| DELETE | /authors/:id | Eliminar un autor |

### Posts

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /posts | Listar todos los posts |
| GET | /posts/:id | Obtener un post por ID |
| GET | /posts/author/:authorId | Posts de un autor específico |
| POST | /posts | Crear un post |
| PUT | /posts/:id | Actualizar un post |
| DELETE | /posts/:id | Eliminar un post |

## Tests

```bash
npm test
```

## Documentación interactiva (Swagger)

Con el servidor corriendo:
- Local: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)
- Railway: [https://pi2-blog-api-production.up.railway.app/api-docs](https://pi2-blog-api-production.up.railway.app/api-docs)

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| DATABASE_URL | String de conexión a PostgreSQL |
| PORT | Puerto del servidor (default: 3000) |

## Capturas de pantalla

### GET /authors
![GET /authors](docs/screenshots/authors.png)

### GET /posts
![GET /posts](docs/screenshots/posts.png)

## Uso de IA

Este proyecto fue desarrollado con asistencia de Claude y OpenCode para generar la estructura, controllers, services, tests, documentación OpenAPI y resolución de errores durante el desarrollo.
