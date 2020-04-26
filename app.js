const argv = require('./config/yars').argv;
const colors = require('colors');


// node app listar -b 5
// node app listar -l 20 -b 5



// ISSUE 4
const {crearFichero, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
    case 'listar':
        console.log(listarTabla(argv.base,argv.limite));
        break;
    case 'crear':
         crearFichero(argv.base, argv.limite).then(fichero => {
             console.log(`Fichero creado: ${ fichero }`)
        }).catch(err => {
            console.log(err);
        })
        break;
    default:
        console.log('comando no reconocido');
}



// // Destucturacion de esta linea con la de abajo
// //let multiplicar = require('./multiplicar/multiplicar');
// //const {crearFichero} = require('./multiplicar/multiplicar');

// // ISSUE 3
// //let argv2 = process.argv;

// //console.log('base: ',argv.base);
// //console.log('limite: ', argv.limite);

// // ISSUE 1
// //let base = 2;
// // crearFichero(base).then(fichero => {
// //     console.log(`Fichero creado: ${ fichero }`)
// // }).catch(err => {
// //     console.log(err);
// // })

// // ISSUE 2
// // node app --base=4 o node app --loquesea=5
// // let argv = process.argv
// // let param = argv[2];
// // let base = param.split('=')[1]
// // crearFichero(base).then(fichero => {
// //     console.log(`Fichero creado: ${ fichero }`)
// // }).catch(err => {
// //     console.log(err);
// // })
// // console.log(process.argv)