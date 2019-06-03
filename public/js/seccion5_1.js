
function imprimirTabla( base, limite ) {

    for(let i = 1; i <= limite; i++) {

        let resMultiplicacion = base * i;

        console.log(base +' x ' + i + ' = ' + resMultiplicacion);

    }

}

imprimirTabla(3, 10);

imprimirTabla(4, 10);



