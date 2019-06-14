// 1 Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.

// alert('Hello World');

// 2 Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).

document.write('Hello World');

// 3 Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.

document.write('<br/>' + 3 + 5);

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

// 10 Escribe un programa que pida una frase y escriba las vocales que aparecen

