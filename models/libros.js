var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = Schema({
  titulo: String,
  isbn: String,
  autor: {
    nombre: String,
    apellido: String
  }
});
module.exports = mongoose.model('Libro', BookSchema);
