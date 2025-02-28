// Importamos el módulo 'express' para manejar las rutas
const express = require("express");
const router = express.Router(); // Creamos un router de Express

// Importamos el controlador de tareas donde se definen las funciones para cada operación
const taskController = require("../controllers/taskController");

// Ruta para obtener todas las tareas
router.get("/", taskController.getAllTasks);

// Ruta para obtener una tarea específica por su ID
router.get("/:id", taskController.getTaskById);

// Ruta para crear una nueva tarea
router.post("/", taskController.createTask);

// Ruta para actualizar una tarea existente por su ID
router.put("/:id", taskController.updateTaks); // Posible error en el nombre del método (updateTaks -> updateTask)

// Exportamos el router para que pueda ser utilizado en otros archivos
module.exports = router;
