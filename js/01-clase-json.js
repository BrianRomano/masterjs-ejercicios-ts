var bicicleta = {
    color: 'Rojo', 
    modelo: 'BMX', 
    frenos: 'de disco', 
    velocidadMaxima: '60km', 
    cambiaColor: function(color){
        this.color = color; 
        console.log(this);
    }
}
bicicleta.cambiaColor("Azul")