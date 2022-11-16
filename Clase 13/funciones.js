let arrayNumeros=[12,45,111,500,400];
let otrosNumeros=[321,54,54,54,87];
let totalSumaNum=0;

//crear funciones y utilizarlas

//1) crear o definor
//2) ejecutarla

//CREANDO FUNCIONES

//funcion tradicional

function saludo() {
    let nombre = prompt("Ingrese su nombre");
    console.log("hola "+ nombre)
    
}

function sumar(numero1,numero2) {
    console.log(numero1+numero2)
  
    return numero1+numero2
}

function sumarArray(lista) {
    let total=0;

    
    // num =400        
    for (let num of lista) {
      //total=total+400
        total=total+num
    }

    console.log(total)
    return total
}

//arrow funtion -> funcion flecha
//(parametros)=>{instrocciones de la funcion}

// const sumar = (numero1,numero2)=>{

//     console.log(numero1+numero2)
//     return numero1+numero2
// }

const color=()=>{
    console.log("rojo")
}



//EJECUTAR LA FUNCION

// saludo()
// sumar(40,20)
// sumar("Juan","Perez")
// sumar(654654,21321321)

totalSumaNum=sumar(20,40) +sumarArray(arrayNumeros)
console.log(sumarArray(arrayNumeros))

