const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const songController = require('./controllers/songController');

const app = express();
const port = 3000;

// Configuración de middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos de MongoDB
mongoose.connect('mongodb://0.0.0.0:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.log('Error al conectar a MongoDB:', error);
  });

// Definir rutas para CRUD
app.get('/api/songs', songController.getItems);
app.get('/api/songs/:id', songController.getItemById);
app.post('/api/songs', songController.createItem);
app.put('/api/songs/:id', songController.updateItem);
app.delete('/api/songs/:id', songController.deleteItem);
// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor backend en funcionamiento en el puerto', port);
});
