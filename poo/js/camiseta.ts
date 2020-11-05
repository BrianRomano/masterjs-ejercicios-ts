//Interface
interface CamisetaBase{
    setColor(color);
    setModelo(modelo);
    setMarca(marca);
    setTalle(talle);
    setPrecio(precio);
}
//Clase
class Camiseta implements CamisetaBase{
    //Propiedades
    private color: string;
    private modelo: string;
    private marca: string;
    private talle: string; 
    private precio: number;  
    //Constructor
    constructor(color, modelo, marca, talle, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talle = talle;
        this.precio = precio;
    }
    //Metodos
    public setColor(color:string){
        this.color = color;
    }
    public getColor(){
        return this.color;
    }
    public setModelo(modelo:string){
        this.modelo = modelo; 
    }
    public getModelo(){
        return this.modelo;
    }
    public setMarca(marca:string){
        this.marca = marca;
    }
    public getMarca(){
        return this.marca;
    }
    public setTalle(talle:string){
        this.talle = talle;
    }
    public getTalle(){
        return this.talle;
    }
    public setPrecio(precio:number){
        this.precio = precio;
    }
    public getPrecio (){
        return this.precio;
    }
}
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
class Campera extends Camiseta{
    //Propiedad
    public capucha: boolean;
    //Metodos
    public setCapucha(capucha:boolean){
        this.capucha = capucha;
    }
    public getCapucha(){
        return this.capucha;
    }
}
var campera = new Campera();
campera.setColor("Negro");
campera.setModelo("Running");
campera.setMarca("Marca");
campera.setTalle("L");
campera.setCapucha(true);
campera.setPrecio(1500);
//Mostrar objeto de clase hija
console.log(campera);