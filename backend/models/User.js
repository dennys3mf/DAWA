const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Definir el esquema de usuario
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
