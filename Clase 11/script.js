//Entidad que regula los estandares de JS : ECMA
//ES6 Ecma Script 6
//CSS3
//HTML5

// Tipos de datos : String - Booleans -     Numbers -   Undefined -     null
//                  '' "" -  true false     numero solo 
// NaN = Not a Number no es un numero, peroo es un tipo de dato number 

// Variables : espacios de memoria donde guardar informacion  let - const

// ------ DEFINIENDO VARIABLES (creando variables )------
//palabra re + nombre de variable + = + contenido

// camelCase para los nombres compuestos por mas de una palabra
let nombreUsuario = "Juan Perez"; 
let edad = 20; // tipo de dato number y el valor es 20
let rangoEdad=20;

const password="Adm78978"; // constante y una vez definida no la puedo modificar
const verdadero=true;
const numero ="654";

let datoUsuario=parseInt(prompt("Ingrese aqui su dato"));// prompt siempre va a darme un tipo de dato string
//utilizar una variable ya definida solo tenemos que nombrarla 


//console.log(nombreUsuario)

// ------ MODIFICANDO VARIABLES  ------

rangoEdad = "adulto" //tipo de dato es string y el valor es "adulto"

nombreUsuario = "Ana";//let nos permite modificar su contenido




//password="lkjlkjlk"  //da error ya que const no nos permite modificar el contenido (constante)
//nombreUsuario

//funcion de JS para mostrar por consola -> console.log()

//funcion de JS para saber que tipo de dato tengo -> typeof()


console.log(typeof(datoUsuario))
console.log(typeof(edad))

//alert("HOLAA")  manda un mensaje de alerta