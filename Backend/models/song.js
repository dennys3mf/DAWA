const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  artista: { type: String, required: true },
  genero: { type: String, required: true },
  duracion: { type: String, required: true },
  tempo: { type: Number, required: true },
  // Otros campos que desees para tu modelo
});

module.exports = mongoose.model('Song', itemSchema);
