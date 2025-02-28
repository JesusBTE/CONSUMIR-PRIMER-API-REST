// Importamos el módulo 'express' para crear la aplicación web
const express = require("express");
const app = express(); // Inicializamos la aplicación de Express

// Importamos las rutas de tareas desde el archivo correspondiente
const taskRoutes = require("./routes/taskRoutes");

// Middleware para permitir el uso de JSON en las solicitudes
app.use(express.json());

// Definimos las rutas base para las tareas con el prefijo '/apiV1/tasks'
app.use("/apiV1/tasks", taskRoutes);

// Definimos el puerto en el que se ejecutará el servidor, usando una variable de entorno o el puerto 3000 por defecto
const PORT = process.env.PORT || 3000;

// Iniciamos el servidor en el puerto definido y mostramos un mensaje en la consola
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
