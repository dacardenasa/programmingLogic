
function calcularKgs(libras) {

    const kg = 2.2046;

    let resultado = libras/kg;

    resultado = Math.round(resultado*100)/100;

    return resultado;
}

let resultado = calcularKgs(160);

console.log(resultado);
