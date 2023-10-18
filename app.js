const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/instituciones', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected!');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', './views');

const universidadSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String
});
const Universidad = mongoose.model('Universidades', universidadSchema);

app.get('/', (req, res) => {
  Universidad.find().then((arrUniversidades) => {
    console.log('All universities:', arrUniversidades);
    res.render('index', { title: 'Universidades', arrUniversidades});
  }).catch((error) => {
    console.error('Error retrieving users:', error);
  });

})

app.post('/', (req, res) => {
  const datos = req.body
  const universidad = new Universidad ({
    nombre: datos.nombre,
    descripcion: datos.descripcion,
    imagen: datos.imagen
  })
  universidad.save().then(() => {
    console.log('New university created!');
    res.redirect('/')
  }).catch((error) => {
    console.error('Error creating user:', error);
  });
});

app.get('/agregar', (req, res) => {
  res.render('agregar', { title: 'agregar'});
});

app.listen(3000, () => {
  console.log('Ejecutando en el puerto 3000');
});