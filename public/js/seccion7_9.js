
function filtrarPorLetra( heroes, letra) {

    let heroesCon = [];

    for(let i = 0; i < heroes.length; i++) {

        if(heroes[i].startsWith(letra)) {

            heroesCon.push(heroes[i]);

        }

    }

    if(heroesCon.length === 0) return ('Ningun heroe comienza por la letra: ' + letra);

    return heroesCon;

}

let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel', 'Antman', 'Dormamu'];

let heroesCon = filtrarPorLetra( heroes, 'S');

console.log( heroesCon ); // She Hulk, Spiderman