
function numeroMayor( array ) {

    let mayor = -999999;

    for(let i = 0; i <= array.length; i++) {

        if(array[i] > mayor) {
            mayor = array[i];
        }

    }

    return mayor;

}

let numeros = [6,8,258,15,48,16,389,2,15];

let resultado = numeroMayor( numeros );

console.log( 'El numero mayor es: ' + resultado);