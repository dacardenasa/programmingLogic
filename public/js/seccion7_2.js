
function kmsToMillas(kilometros) {

    let millas  = kilometros * 0.62137;

    return millas;

}

let millas = kmsToMillas(20);

millas = Math.round(millas * 100)/100;

console.log(millas);