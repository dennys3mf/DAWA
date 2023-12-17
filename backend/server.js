const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configuración de la app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Inicializar el servidor
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is up and running on port: " + port);
});

const mongoose = require("mongoose");

// Conexión a MongoDB
mongoose
  .connect("mongodb://0.0.0.0/mean_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected…"))
  .catch((err) => console.log(err));

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);
