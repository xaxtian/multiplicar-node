const argv = require('yargs').argv
const fs = require('fs');
const colors = require('colors');

let base = 1;

let getTable = (_base, _limit = 10) => {
    let resp = '';
    for (let i = 1; i <= _limit; i++) {
        resp += `${_base} * ${i} = ${_base * i}`;
        resp += '\n'
    }
    return resp;
}

let saveTable = (_table, _base) => {
    fs.writeFile(`taulak/${_base}-taula.txt`, _table, (err) => {
        if (err) throw err;
        console.log('File saved successfully'.green);
    })
}

let commando = argv._[0];
let lista = getTable(argv.base, argv.limite);
switch (commando) {
    case 'listar':
        console.log(lista);
        break;
    case 'guardar':
        saveTable(lista, argv.base);
        break;
}