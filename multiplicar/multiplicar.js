const fs = require('fs');
const colors = require('colors')

let listarTabla = (base, limite) => {
    return new Promise((resolve,reject) => {

        let data = '';

        console.log(`Tabla de ${base}`.yellow);
        for(let i = 1; i<= limite; i++) {
            data += `Base ${base} * ${i} = ${ base * i}\n`;
        }

        if(data === '' || data === undefined) {
            reject('Error producido');
        } else {
            resolve(`La tabla generada para la base ${base} y el limite ${limite} es\n ${data}`);
        }


    });
}

let crearFichero = (base, limite) => {
    return new Promise((resolve,reject) => {

        if (!Number(base)){
            reject('No es un numero');
        }

        let data = '';

        for(let i = 1; i<= limite; i++) {
            data += `Base ${base} * ${i} = ${ base * i}\n`;
        }
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, { flag: 'w+' }, (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(`tabla-${base} saved`);
            }
          });
    });
}

module.exports = {
    crearFichero,
    listarTabla
}