
function parImpar( array ) {

    let residuo = 0;

    for(let i = 0; i < array.length; i++) {

        residuo = array[i] % 2;

        if( residuo === 0 ) {

            console.log(array[i] + ' es un numero  par');

        } else {

            console.log(array[i] + ' es un numero  impar');

        }

    }

}

let numeros = [4897, 5900, 1255, 1489, 78958, 1245, 1545];

parImpar(numeros);