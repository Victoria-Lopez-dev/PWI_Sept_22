// Definimos variables

let numero1= 320;
const nombre= "Julia Lopez";
const numero2=10;
let edadUsuario =  18 ;//prompt(" ingrese su edad");
let  paisUsuario = "Argentina";
let conAdulto=false;

//Operadores Aritmeticos - calculos matematicos y concatenacion(suma): suma - resta - multi - division 


console.log(numero1 + 20);

numero2 - numero1;

400 * 20;
numero1 / 100;

numero1 ++ // numero1 + 1
numero1-- // numero1 - 1

//concatenacion une (con los strings)

console.log(nombre + " ,buen dia!!") // "Julia Lopez , buen dia "

console.log(numero2 +" " +nombre) // nos devuelve es un string

//console.log(prompt("escriba su nombre") + " Bienvenido/a/e!!")


// Operadores de Comparacion -> devuelven booleanos

//mayor o menor a algo

numero1 < 654654
numero2 > numero1

//console.log(numero2 > numero1) // false

//mayor o igual ( >= ) / menor o igual (<=) 
// el igual va del lado derecho
numero2 <= 10
654654 >= numero1

edadUsuario >= 18


// igual a .. (==) solo se fija en el contenido , no en el tipo de dato

// "Ana" = nombre  // nombre ahora vale "Ana"

"Ana" == nombre // "Ana" es igual a el contenido de la variable nombre

// //          "10"      10 
// console.log("10" == numero2)


// //igualdad estricta ( === )

// son el mismo valor ?  si
//son el mimo tipo de dato ? no

// string      number
// "10"        10 
  "10" === numero2

 "10" != numero1 // distinto a...( solo compara el valor)
 "10" !== numero2 //distinto tipo de dato y valor


//console.log(typeof("654654") == "string")


//Operadores Logicos

// si es mayor de edad ? si se encuentra en Argentina 

//AND && "y" -> me pide que AMBAS operaciones den como resultado 'true' para ser verdadero.

//              true                 true
//              18   >=   18  Y    "Japon"  == "Argentina"  
console.log(edadUsuario >=18 && paisUsuario == "Argentina")


// OR || "o" -> me pide que ALGUNA de las operaciones se cumplan

//              true                    false
//              18      >= 18       false  == true
            edadUsuario >= 18 || conAdulto == true

// NOT ! "no es"

//          true -> como tiene el NOT -> false
//"Argentina" !== "Japon"
//   !(  true   )
!(paisUsuario !== "Japon")



console.log(!(paisUsuario == "Japon")) 

 // que no sea undefined

// false     !false -> true
 conAdulto = !conAdulto 

 console.log(conAdulto)


