// condicional if/else
//  true - false
// if(condicion){
//     //acciones a realizar si se cumple la condicion
// }else{
//     //acciones a realizar si NO se cumple la condicion
// }

//el clima
//si llueve salga con piloto, sino que salga en bici
//definiendo variables(creamos las variables con let -const)
let clima="soleado";
let vaAunaReunion=true;

//      false
// if(clima === "llueve"){
//     console.log("no te olvides el piloto!!")

// }else{
//     //     true         
//     if(vaAunaReunion){
//         console.log("anda caminando")
         
//     }else{
//         console.log("Mejor andate en bici")
//     }
// }

//si necesito solo el if
//let clima="llueve"
// if(clima==="llueve"){
//     console.log("no te olvides el piloto!!")
// }

// if(clima === "soleado"){
//     console.log("usa lentes de sol")
// }

// if(clima === "nublado"){
//     console.log("abrigate")
// }


// Hacer un programa donde compare un usuario y contraseña ingresado por el usuario con  las siguientes variables de usuario y contraseña registrados.En caso que sean correctos ,consultar si es administrador o cliente, en caso que sea administrador devolver por consola “tiene acceso a todos campos” si es cliente devolver por consola “tiene acceso limitado”.

//compare usuario y contraseña .
//despues me fije si es o no administrador

//condicionales y operadores de comparacion


// let usuarioRegistrado="Juan Perez";
// let passwordRegistrada="Usuario123";

// //solicite un usuario y contraseña
// let usuario=prompt("ingrese nombre de usuario");
// let password=prompt("Ingrese su contraseña");

// if(usuario === usuarioRegistrado && password === passwordRegistrada){
//     let esAdmin=prompt("Es administrador? ingrese SI o NO").toUpperCase();

//    if(esAdmin !== "NO" || esAdmin !== "SI"){
//         console.log("Lo ingresado no es valido, le pedimos ingresar solo las palabras NO o SI");
//         esAdmin=prompt("Es administrador? ingrese SI o NO").toUpperCase();
//    }else{
//         if(esAdmin === "SI"){
//             console.log("tiene acceso a todos campos")
//         }else{
//             console.log("tiene acceso limitado")
//         }    
//    }

// }


//funcion nativa de JS para hacer un string todo en mayuscula : toUpperCase()
//funcion nativa de JS para hacer un string todo en minuscula : toLowerCase()

//---------------------------------
//Condicional : operador ternario


//condicion ? queQuieroQueHagaSiLaDondicionDaTRUE : queQuieroQueHagaSiLaDondicionDaFALSE;
//Tenemos que colocar las dos alternativas sino no funciona

// let clima="soleado";
//  condicion             si da true                       si da   false
// clima === "soleado" ? console.log("llevate un piloto") : console.log("anda en bici");

//es lo mismo que si escribimos :
// if(clima === "llueve"){
//     console.log("llevate un piloto");
    

// }else{
//     console.log("anda en bici")
    
// }


//SWITCH

//segun el dia de la semana indicar que deporte hago
let diaDeLaSemana="Lunes";


    switch(diaDeLaSemana) {
        case "Lunes":
            console.log("hoy toca tenis");
            break;

        case "Martes":
            console.log("hoy toca futbol");
            break;

        case "Miercoles":
            console.log("hoy toca gimnacio");
            break;

        case "Jueves":
            console.log("hoy toca natacion");
        break;

        case "Viernes":
            console.log("hoy toca voley");
            break;
        case "Sabado":
            console.log("hoy toca tenis")
            break;
        default:
            console.log("Hoy no tenes actividad fisica")
            break;
    }

//...

