//String
let nombre: string = "Brian";

//Number
let edad: number = 21;

//Boolean
let verdadero_falso: boolean = true; 

//Any => Permite ingresar cualquier tipo de dato y asignarle uno nuevo
let cualquierValor: any = "Hola";
cualquierValor = 25;

//Array
let lenguajes: Array<string> = ["HTML", "CSS", "JavaScript"];

//Array II
let masLenguajes: string[] = ["PHP", "SQL"];

//Multiples tipos de datos
let multipleTipo: string | number = 54;

//Tipo de dato personalizado
type tipoPersonalizado = string | number | boolean;
let miDatoPersonzalizado: tipoPersonalizado = "Hola";

console.log(nombre, edad, verdadero_falso, cualquierValor, lenguajes, masLenguajes, multipleTipo, miDatoPersonzalizado);

