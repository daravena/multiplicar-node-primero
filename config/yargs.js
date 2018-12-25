const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }  
}

//let fs = require('fs');
var argv = require( 'yargs' )
    .command('listar', 'Imprime por consola tabla de multiplicar',opt)
    .help()
    .argv;

    let fs = require('fs');
var argv = require( 'yargs' )
    .command('listar2', 'Imprime por consola tabla de multiplicar',opt)
    .help()
    .argv;


module.exports = {
    argv
}