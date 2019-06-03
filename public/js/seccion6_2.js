
class Carro {

    constructor(marca, tipo, puertas) {

        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;

        this.creadoEn = 'hoy';
        this.encendido = false;
        this.gasolina = 100;

    }

    encenderCarro() {

        if(this.encendido){
            console.error('EL carro ya se encuentra encendido');
        }else{
            this.encendido = true;
            console.log('El carro esta encendido');
        }

        return this;

    }

    realizarViaje(consumo) {

       if(!this.encendido) return console.log('Auto apagado');

       if(consumo > this.gasolina) return console.log('No puede realizar el viaje: Gasolina ' + this.gasolina);

       this.gasolina = this.gasolina - consumo;
       return 'Le quedan ' + this.gasolina;

    }

}

let carro = new Carro('Mazda', 'Sedan', 2);





