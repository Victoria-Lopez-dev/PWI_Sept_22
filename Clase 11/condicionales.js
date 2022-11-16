//Condiciones
//le pido una edad al usuario y transformo el dato en numerico
let edadUsuario= parseInt(prompt("Ingrese su edad"));
let conAdulto=true;
//estructura
// if(condicion){
//  acciones si se cumple la condicion (true)
// }else{
//  acciones si no se cumplen 
// }

if (edadUsuario >=18 ) {
    console.log("Sos mayor de 18 podes ingresar al sitio");

}else{
    if(edadUsuario >=16){
        console.log("Sos mayor de edad podes ingresar al sitio")
    }else{
    console.log("Sos menor, necesitas un adulto para ingresar")
    }
}


if(conAdulto == true){
    console.log("puede ingresar sin problema")
}

let usuarioRegistrado="Juan Perez"
let passwordRegistrada="Usuario123"