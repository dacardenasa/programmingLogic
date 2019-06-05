
function max( a, b, c) {

    let mayor = 0;

    if( a > b && a > c) return mayor = a;

    if( b > a && b > c) return mayor = b;

    if( c > a && c > b) return mayor = c;

}

let mayor = max(22, 15, 18);

console.log(mayor);
