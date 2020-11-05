var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Clase
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talle, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
    //Metodos
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    Camiseta.prototype.setMarca = function (marca) {
        this.marca = marca;
    };
    Camiseta.prototype.getMarca = function () {
        return this.marca;
    };
    Camiseta.prototype.setTalle = function (talle) {
        this.talle = talle;
    };
    Camiseta.prototype.getTalle = function () {
        return this.talle;
    };
    Camiseta.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Camiseta.prototype.getPrecio = function () {
        return this.precio;
    };
    return Camiseta;
}());
//Objeto
var camiseta = new Camiseta();
//Valores de las propiedades
camiseta.setColor("Rojo");
camiseta.setModelo("Running");
camiseta.setMarca("Nike");
camiseta.setTalle("XL");
camiseta.setPrecio(1000);
//Mostrar Objeto
console.log(camiseta);
//Constructor
var nuevaCamiseta = new Camiseta("Azul", "Running", "Adidas", "L", 500);
//Mostrar Constructor
console.log(nuevaCamiseta);
//Herencia
//Clase Hija de Camiseta
var Campera = /** @class */ (function (_super) {
    __extends(Campera, _super);
    function Campera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //Metodos
    Campera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Campera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Campera;
}(Camiseta));
var campera = new Campera();
campera.setColor("Negro");
campera.setModelo("Running");
campera.setMarca("Marca");
campera.setTalle("L");
campera.setCapucha(true);
campera.setPrecio(1500);
//Mostrar objeto de clase hija
console.log(campera);
