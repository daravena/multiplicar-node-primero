const {crearArchivo} = require('./multiplicar.js');
const argv = require('./config/yargs').argv;
const colors = require('colors');

console.log('hola'.gray);
let base = 1;
crearArchivo(base)
    .then(archivo =>{console.log(`el archivo creado es ${archivo}`)})
    .catch((err) =>{console.log(err)});