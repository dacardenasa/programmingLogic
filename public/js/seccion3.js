function farToCelcius(a) {

    let numFarenheit = a;
    let c = 0;

    c = 5*(numFarenheit - 32)/9;

    return c;

}

function celToFarenheit(a) {

    let numCelcius = a;
    let f = 0;

    f = (9*numCelcius/5) + 32;

    return f;

}

// Conversion farenheit a celcius

let farenheit = 90;

let celcius = farToCelcius(farenheit);

console.log('La conversion de '+ farenheit +' grados farenheit a celcius es: '+ celcius);

// Conversion celcius a farenheit

let celciusNum = 99;

let farenheitNum = celToFarenheit(celciusNum);

console.log('La conversion de '+ celciusNum +' grados celcius a farenheit es: '+ farenheitNum);

