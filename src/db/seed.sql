-- Datos de ejemplo para authors
INSERT INTO authors (name, email, bio) VALUES
('Ana García', 'ana@example.com', 'Desarrolladora full-stack apasionada por Node.js'),
('Carlos Ruiz', 'carlos@example.com', 'Escritor técnico especializado en bases de datos'),
('María López', 'maria@example.com', 'Ingeniera de software con foco en APIs REST');

-- Datos de ejemplo para posts (cada uno vinculado a un author existente)
INSERT INTO posts (title, content, author_id, published) VALUES
('Introducción a Node.js', 'Node.js es un runtime de JavaScript del lado del servidor...', 1, true),
('PostgreSQL vs MySQL', 'Ambas bases de datos relacionales tienen ventajas...', 2, true),
('APIs RESTful', 'REST es un estilo arquitectónico para diseñar APIs...', 1, true),
('Manejo de errores en Express', 'El manejo apropiado de errores mejora la experiencia del usuario...', 3, false),
('Async/Await explicado', 'Async/Await simplifica el trabajo con promesas en JavaScript...', 1, false);