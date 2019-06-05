
function masLargo( heroes ) {

    let nombre = '';

    for (let i = 0; i < heroes.length; i++) {

        let cadena = heroes[i];

        if(cadena.length > nombre.length) {

            nombre = cadena;

        }

    }

    return nombre;
}


let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Thanos'];

let heroeLargo = masLargo( heroes );

console.log( heroeLargo ); // Profesor Charles Xavier
