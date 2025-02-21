# Rest-Api-movies-node

Este proyecto es una API RESTful desarrollada en Node.js para gestionar películas. Utiliza **MySQL** como base de datos remota para almacenar la información de las películas. Permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre la base de datos.

---

## **Tecnologías Utilizadas**
- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework para construir aplicaciones web y APIs en Node.js.
- **MySQL**: Base de datos relacional utilizada para almacenar la información de las películas.
- **mysql2**: Librería de Node.js para interactuar con MySQL.
- **Dotenv**: Librería para gestionar variables de entorno.
- **CORS**: Middleware para permitir solicitudes de recursos cruzados (Cross-Origin Resource Sharing).
- **Nodemon**: Herramienta para reiniciar automáticamente el servidor durante el desarrollo.

---

## **Instalación y Configuración**
Sigue estos pasos para clonar, instalar y ejecutar el proyecto localmente:
1. **Clonar el repositorio**:
   ```bash
    git clone https://github.com/Patobenitez25/Rest-Api-movies-node.git
    cd Rest-Api-movies-node
2. **Instalar dependencias**:
   ```bash
    Copy
    npm install
   ```


Configurar variables de entorno en el archivo .env ubicado en la raiz del proyecto

Ejecutar el servidor:

```bash
   Copy
   npm start
```
El servidor estará disponible en http://localhost:1234.

## Endpoints de la API
La API ofrece los siguientes endpoints para gestionar películas:

**Obtener todas las películas**

````http
GET /api/movies
````

Respuesta: Lista de todas las películas en la base de datos.

Obtener una película por ID

````http
GET /api/movies/:id
````

Respuesta: Detalles de la película con el ID especificado.

Crear una nueva película

````http
POST /api/movies
````
Cuerpo de la solicitud:

````json
{
  "title": "Nombre de la película",
  "director": "Nombre del director",
  "year": 2023,
  "genre": "Género de la película"
}
````
**Respuesta: Detalles de la película creada.**

**Actualizar una película existente** 

````http
PUT /api/movies/:id
````
Cuerpo de la solicitud:
````json
{
  "title": "Interstellar",
  "director": "Christopher Nolan",
  "year": 2014,
  "genre": "Sci-Fi"
}
````
**Respuesta: Detalles de la película actualizada.**

**Eliminar una película**
````http
 DELETE /api/movies/:id
````
**Respuesta: Mensaje de confirmación de eliminación**

### Modelo de Datos
El modelo de datos para las películas está definido en models/Movie.js. Aquí se utiliza mysql2 para realizar consultas a la base de datos MySQL. Un ejemplo de cómo se podría estructurar la tabla en MySQL es:

```sql
CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    director VARCHAR(255) NOT NULL,
    year INT NOT NULL,
    genre VARCHAR(255) NOT NULL
);
```
### Ejemplos de Uso
**Obtener todas las películas:**

```bash
GET http://localhost:3000/api/movies
```
**Crear una nueva película:**

```bash
POST http://localhost:3000/api/movies -H "Content-Type: application/json" -d '{
  "title": "Inception",
  "director": "Christopher Nolan",
  "year": 2010,
  "genre": "Sci-Fi"
}'
```
**Eliminar una película:**

```bash
DELETE http://localhost:3000/api/movies/:id
```
### Mejoras Futuras
**Autenticación y Autorización:** Implementar un sistema de autenticación (por ejemplo, JWT) para proteger los endpoints.

**Validación de Datos:** Añadir validaciones más robustas para los datos de entrada.

**Pruebas Automatizadas:** Implementar pruebas unitarias y de integración.

**Documentación de la API:** Usar herramientas como Swagger para generar documentación interactiva.

### Conclusión
Este proyecto es una excelente base para construir una API RESTful en Node.js con MySQL. Está bien estructurado y utiliza tecnologías modernas y populares. Con algunas mejoras, como la implementación de autenticación y pruebas automatizadas, podría convertirse en una aplicación lista para producción.

**Contribuciones**
Si deseas contribuir a este proyecto, ¡eres bienvenido! Por favor, crea un fork del repositorio, realiza tus cambios y envía un pull request.

**Licencia**
Este proyecto está bajo la licencia MIT.


---


