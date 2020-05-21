var mongoose = require('mongoose');
var Libro = require('./models/libros.js');

mongoose.connect('mongodb+srv://usuario1:yG5J7mT04JvnpP58@cluster0-ow5l5.mongodb.net/libros?retryWrites=true&w=majority', {
  useNewUrlParser: true
}).then(() => { console.log('Conectado a Mongo DB Atlas')})
.catch(err => console.log(err));

function limpiarBase() {
  Libro.deleteMany({}, function (err) {console.log("Datos borrados");}); //limpia la DB
}

function nuevoLibro(){
  var book = Libro({
    titulo: "La niebla",
    isbn: "0123456",
    autor: {
      nombre: "Stephen",
      apellido: "King"
    }
  });

  book.save(function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log(data);
    }
  });
}

function addLibros() {

  var libros=[
    { titulo:"libro1",isbn: "1111111",autor: {nombre: "nombre1", apellido: "apellido1"}},
    { titulo:"libro2",isbn: "2222222",autor: {nombre: "nombre2", apellido: "apellido2"}},
    { titulo:"libro3",isbn: "3333333",autor: {nombre: "nombre3", apellido: "apellido3"}},
    { titulo:"libro4",isbn: "4444444",autor: {nombre: "nombre4", apellido: "apellido4"}},
    { titulo:"libro5",isbn: "5555555",autor: {nombre: "nombre5", apellido: "apellido5"}},
    { titulo:"libro6",isbn: "6666666",autor: {nombre: "nombre6", apellido: "apellido6"}},
    { titulo:"libro7",isbn: "7777777",autor: {nombre: "nombre7", apellido: "apellido7"}},
    { titulo:"libro8",isbn: "8888888",autor: {nombre: "nombre8", apellido: "apellido8"}},
    { titulo:"libro9",isbn: "9999999",autor: {nombre: "nombre9", apellido: "apellido9"}},
    { titulo:"libro10",isbn: "0000000",autor: {nombre: "nombre10", apellido: "apellido10"}}];


  Libro.collection.insert(libros,function(err,data){
    if (err) {
      console.log("------------------------ERROR --------------------------");
    }else {
      console.log(data);
    }
  });
}

function findByISBN(isbn){
  Libro.find({isbn:isbn},function(err,documentos){
    console.log(documentos);
  });
}

function cambiarTituloByISBN(isbn, nuevoTitulo){
  Libro.findOneAndUpdate({isbn:isbn},
    {titulo:nuevoTitulo},function(err,data){
    if (err) {
      console.log(err);
    }else {
      console.log(data);
    }
  });
}


function main() {
  //limpiarBase();
  //nuevoLibro();
  //addLibros();
  //findByISBN("0123456");
  cambiarTituloByISBN("0123456", "The Fog");
}

main();    // ejecutamos main
