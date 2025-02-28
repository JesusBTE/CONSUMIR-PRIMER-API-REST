Este proyecto es una API REST desarrollada con Node.js y Express para gestionar tareas. Permite obtener todas las tareas, consultar una tarea por su ID, crear nuevas tareas y actualizarlas.

El proyecto tiene una estructura organizada en carpetas:

models/task.js almacena las tareas en un array.
controllers/taskController.js maneja la lógica.
routes/taskRoutes.js define las rutas de la API.
server.js inicia el servidor.

Los endpoints disponibles son:

GET /apiV1/tasks para obtener todas las tareas.
GET /apiV1/tasks/:id para obtener una tarea por su ID.
POST /apiV1/tasks para crear una nueva tarea.
PUT /apiV1/tasks/:id para actualizar una tarea.
