let fs = require('fs');
var argv = require( 'yargs' )
    .command('listar', 'Imprime por consola tabla de multiplicar',{
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;


let listarTabla = (base, limite) => {

    for (let i = 1; i <= limite; i++) {
        data += `${base} x ${i} es = ${base * i}\n`;
    }
    
}

let comando = argv._[0];
console.log('->'+argv);

switch (comando){
    case 'listar':
    console.log('Listar');
    break;

}

let base = 3;
let data = '';

for (let i = 1; i <= 10; i++) {
    data += `${base} x ${i} es = ${base * i}\n`;
}

let crearArchivo = (base) => {

    return new Promise((resolve, reject) =>{

        if(!Number(base)){
            reject('no es un numero');
            return;
        }

        fs.writeFile(`tablas/tabla_${base}.txt`, data, (err)=>{
            if(err) reject(err)
            else
            resolve(`tabla_${base}.txt`)
        }      
    );

    });

}

module.exports = {
    crearArchivo
}
