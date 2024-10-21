/*
Importa el módulo express y lo asigna a la constante express.
Express es un framework minimalista para construir servidores en Node.js de forma sencilla.
*/
const express = require('express');
const path = require('path');
const app = express();

/* Servir archivos estáticos desde la carpeta 'public' */
app.use(express.static(path.join(__dirname, 'public')));

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log("Servidor corriendo correctamente en http://localhost:3000");
});
