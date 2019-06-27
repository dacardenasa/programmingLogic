// 1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

// alert('Hello World');

// 2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

//document.write('Hello World');

// 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

//document.write('<br/>' + 3 + 5);

// 4 Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”

//let opcion = prompt('Introduzca su nombre:');

//alert('Hola ' + opcion);

// 5 Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

// let number = parseInt(prompt('Ingresa el  primer  digito: '));

// let numberTwo = parseInt(prompt('Ingresa el segundo numero: '));

// alert(number + numberTwo);

// 6 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

/*

function sumarNumeros(a, b){

    if( a > b) return 'El numero  mayor es ' + a;

    return 'El numero mayor es ' + b;

}

let number = parseInt(prompt('Escribe el  primer numero'));

let numbreTwo = parseInt(prompt('Escribe el  segundo numero'));

let resultado = sumarNumeros(number,numbreTwo);

alert(resultado);


 */

// 7 Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/*

function sumarNumeros(a, b, c){

    if( a > b) return 'El numero  mayor es ' + a;

    if( b > c) return 'El numero mayor es ' + b;

    return 'EL numero mayor es ' + c;

}

let number = parseInt(prompt('Escribe el primer numero'));

let numbreTwo = parseInt(prompt('Escribe el segundo numero'));

let numbreThree = parseInt(prompt('Escribe el tercer numero'));

let resultado = sumarNumeros(number,numbreTwo, numbreThree);

alert(resultado);

 */

// 8 Escribe un programa que pida un número y diga si es divisible por 2

/*

function divisible( a ) {

    if (a % 2 === 0) return 'El numero ' + a + ' es divisible x 2';

    return 'El numero ' + a + ' no es divisible x 2';

}

let numero = parseInt(prompt('Introduce el numero para evaluar si es divisible x 2'));

let resultado = divisible( numero );

alert(resultado);

 */

// 9 Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a

/*

function buscarVocal( a ) {

    let contador = 0;

    let vocal = 'a';

    for ( let i = 0; i <= a.length; i++) {

        if( a[i] === vocal) {

            contador = contador + 1;

        }

    }

    if( contador > 0) return 'La vocal ' + vocal + ' se repite ' + contador + ' veces en la cadena ' + a;

    return 'La  vocal ' + vocal + ' no se repite en la cadena ' + a;

}

let palabra = prompt('Ingresa una palabra por favor:');

let resultado = buscarVocal( palabra );

alert(resultado);

 */

// 10 Escribe un programa que pida una frase y escriba las vocales que aparecen

/*

function buscarVocales( cadena ) {

    let arrayVocales = ['a', 'e', 'i', 'o' ,'u'];

    let vocalesRepetidas = [];

    for( let i = 0; i <= arrayVocales.length; i++) {

        for( let j = 0; j < cadena.length; j++) {

            if( arrayVocales[i] === cadena[j]) {

                vocalesRepetidas.push(arrayVocales[i]);

            }

        }

    }

    return vocalesRepetidas;

}

let resultado = [];

let cadena = prompt('Ingresa la cadena a analizar:');

resultado = buscarVocales( cadena );

    if(resultado.length > 0) {

        document.write('La cadena ' + cadena + ' contiene: ' + resultado.length + ' vocales: ');

        for (let i = 0; i < resultado.length; i++) {

            document.write('<br/>' + resultado[i]);

        }

    } else {

        document.write('La cadena no contiene vocales');

    }


 */

// 12 Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales

/*

const arrayVocales = ['a', 'e', 'i', 'o' ,'u'];

let resultado = [];

function buscarVocales( cadena ) {

    let vocalesRepetidas = [];

    for( let i = 0; i <= arrayVocales.length; i++) {

        for( let j = 0; j < cadena.length; j++) {

            if( arrayVocales[i] === cadena[j]) vocalesRepetidas.push(arrayVocales[i]);

        }

    }

    return vocalesRepetidas;

}

function contarVocales( cadena ) {

    if( cadena.length > 0 ) {

        for (let i = 0; i < arrayVocales.length; i++) {

            let contador = 0;

            for (let j = 0; j < cadena.length; j++)  if (arrayVocales[i] === cadena[j]) contador = contador + 1;

            if(contador > 0) document.write('<br/> La vocal ' + arrayVocales[i] + ' se repite ' + contador + ' veces');

        }

    } else {

        document.write('La cadena no tiene vocales');
    }

}

let cadena = prompt('Ingresa la cadena a analizar:');

resultado = buscarVocales(cadena);

document.write('La cadena ' + cadena + ' se repiten las siguientes vocales:');

contarVocales( resultado );

*/

// 13 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

// 14 Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible (hay que decir todos por los que es divisible)

/*

let numberToDiv = [ 2, 3, 5, 7];

function checkDiv( numero, opcion ) {

    for ( let i = 0; i < numberToDiv.length; i++) {

    if( numero % numberToDiv[i] === 0 ) document.write('<br/>El numero ' + numero + ' es divisible por ' + numberToDiv[i]);

    else document.write('<br/> El numero ' + numero + ' no es divisible por ' + numberToDiv[i]);

    }
}

let numero = parseInt(prompt('Ingresa un numero por favor'));

let opcion = parseInt(prompt('Ingresa una opcion entre 2, 3, 5 o 7 para verificar si tu numero es divisible por el: '));

document.write('EL numero ' + numero + ' es divisible asi:')

checkDiv( numero, opcion);

 */

// 15 Escribir un programa que escriba en pantalla los divisores de un número dado

/*

function divisores( numero ) {

    let p = numero;

    while ( p > 0 ){

        if( numero % p === 0) {

            document.write(p + ',');

        }

        p = p - 1;

    }

}

let numero = parseInt(prompt('Ingresa un numero para ver sus divisores'));

document.write('Los  divisores  de ' + numero + ' son: ');

divisores( numero );

*/

// 16 Escribir un programa que escriba en pantalla los divisores comunes de dos números dados

/*

function divisores( numero ) {

    let p = numero;

    let arrayNumber  = [];

    while ( p > 0 ){

        if( numero % p === 0) {

            arrayNumber.push(p);

        }

        p = p - 1;

    }

    return arrayNumber;

}

function divisoresComunes( a, b ) {

    let divComunes = [];

    for ( let i = 0; i < a.length; i++) {

        for (let j = 0;  j < b.length; j++ ) {

            if( a[i] === b[j]) {

                divComunes.push(a[i]);

            }

        }

    }

    return divComunes;
}

function imprimirNumeros( numero ) {

    for( let i = 0; i < numero.length; i++) {

        document.write(numero[i] + ',');

    }

}

let arrayNumber = [];

let arrayNumber2 = [];

let numComunes = [];

let numero = parseInt(prompt('Ingresa un numero: '));

let numero2 = parseInt(prompt('Ingresa el segundo numero: '));

arrayNumber = divisores( numero );

arrayNumber2 = divisores( numero2 );

numComunes = divisoresComunes( arrayNumber, arrayNumber2 );

document.write('Los divisores  comunes de ' + numero + ' y ' + numero2 + ' son: ')

imprimirNumeros( numComunes );

*/

// 17 Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)

/*

function divisores( numero ) {

    let p = numero;

    let contador = 0;

    while ( p > 0 ){

        if( numero % p === 0) {

            contador = contador + 1;

        }

        p = p - 1;

    }

    if ( contador > 2 ) {

        return 'EL numero ' + numero + ' no es primo';

    } else {

        return  'El numero ' + numero + ' es primo';
    }



}

let numero = parseInt(prompt('Ingresa un numero para evaluar si es primo: '));

let resultado = divisores( numero );

document.write(resultado);


 */

/*

function simpleArraySum(ar) {

    let resultadoSuma = 0;

    for (let i = 0; i < ar.length; i++) {

        resultadoSuma = resultadoSuma + ar[i];

    }

    return resultadoSuma;
}

let array = [1,2,3,4,10,11];

let resultado = simpleArraySum( array );

document.write(resultado);

 */

/*

function compareTriplets(a, b) {

    let winAlice = 0;
    let winBob = 0;
    let arrayPlayers = [];

    for (let i = 0; i < a.length; i++) {

        if (a[i] > b[i]) winAlice = winAlice + 1;
        else if (a[i] < b[i]) winBob = winBob + 1;

    }

    arrayPlayers.push(winAlice, winBob);

    return arrayPlayers;
}

let array = [5,6,7];

let array2 = [3,6,10];

let resultado = compareTriplets( array, array2 );

console.log(resultado);

 */

function diagonalDifference(arr) {
    // Write your code here

    let sumLeftDiag = arr[0][0] + arr[1][1] + arr[2][2];

    let sumRightDiag = arr[0][2] + arr[1][1] + arr[2][0];

    let difBetweenDiag = sumRightDiag - sumLeftDiag;

    return difBetweenDiag;
}

let nuevoArray = new Array(3);

nuevoArray[0] = new Array(3);

nuevoArray[1] = new Array(3);

nuevoArray[2] = new Array(3);

for( let i = 0; i < nuevoArray.length; i++) {

    for( let j = 0; j < nuevoArray.length; j++) {

        nuevoArray[i][j] = parseInt(prompt('Digita un numero: '));

    }

}

let resultado = diagonalDifference( nuevoArray );

document.write(resultado);

