// Importamos el modelo de tareas, que contiene el arreglo 'tasks'
const { task, tasks } = require("../models/task");

// Controlador para obtener todas las tareas
exports.getAllTasks = (req, res) => {
  res.status(200).json(tasks); // Devuelve el listado de tareas con código 200 (OK)
};

// Controlador para obtener una tarea específica por su ID
exports.getTaskById = (req, res) => {
  const id = parseInt(req.params.id); // Convertimos el ID de la URL a un número entero
  const task = tasks.find((item) => item.id === id); // Buscamos la tarea en el arreglo

  if (task) {
    res.status(200).json(task); // Si la tarea existe, la enviamos con código 200 (OK)
  } else {
    res.status(404).json({ message: "Tarea no encontrada" }); // Si no existe, devolvemos un error 404
  }
};

// Controlador para crear una nueva tarea
exports.createTask = (req, res) => {
  const newTask = {
    id: tasks.length, // Se asigna un ID basado en la longitud actual del arreglo (puede causar problemas si se eliminan tareas)
    title: req.body.title, // Se obtiene el título desde el cuerpo de la solicitud
  };

  tasks.push(newTask); // Agregamos la nueva tarea al arreglo
  res.status(201).json(newTask); // Devolvemos la tarea creada con código 201 (Created)
};

// Controlador para actualizar una tarea existente por su ID
exports.updateTaks = (req, res) => {
  // Posible error tipográfico en 'updateTaks' (debería ser 'updateTask')
  const id = parseInt(req.params.id); // Convertimos el ID a número entero
  const task = tasks.find((t) => t.id === id); // Buscamos la tarea en el arreglo

  if (task) {
    task.title = req.body.title; // Actualizamos el título de la tarea
    res.status(200).json(task); // Devolvemos la tarea actualizada con código 200 (OK)
  } else {
    res.status(404).json({ message: "Tarea no encontrada" }); // Si no existe, devolvemos error 404
  }
};
