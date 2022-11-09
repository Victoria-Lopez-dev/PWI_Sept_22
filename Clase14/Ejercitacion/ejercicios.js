// Marcelo esta armando la lista para el super. Crear un bucle para que Marcelo pueda ingresar los productos que necesite y muestre por consola la lista completa
//lista listo!
//lista (arrays)  listo!
//metodos arrays push() listo!
//como ingresar los productos -> prompt() listo!
//blucle for - while -do while

//que ingrese productos hasta que Marcelo termine 
//preguntarle a Marcelo si termino 


//mostrar por consola  console.log()


//ESTRUCTURAS

// for (let i = 0; condicion ; i++) {
//     const element = array[i];
    
// }
function listaSuper6() {
    let lista=[]
        let consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ") ;

        while (consultaMarcelo == "si") {

            let producto=prompt("Ingrese el producto");
            lista.push(producto)
            consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ")

        }
    console.log(lista)  
}


function listaSuper() {
    let lista=[];

    let consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase();

 
        while (consultaMarcelo !== "no") {
            
            if(consultaMarcelo !== 'si'){
                alert("No comprendo la respuesta, por favor vuelta ingresar .Recuerde que son la palbras si o no ");

                consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase();
            }else{

                let producto=prompt("Ingrese el producto");
                lista.push(producto)
                consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca si o no ").toLocaleLowerCase()
            }
        } 
        console.log(lista)
}


//listaSuper()

function listaSuper2() {
    let lista=[];

    let producto=prompt("para iniciar con la lista ingresa el producto o clickea el boton OK cuanto no quieras agregar mas ");

    for (let contador = 0; producto !== ""; contador++) {
        lista.push(producto)
        producto=prompt("para iniciar con la lista ingresa el producto o la palabra boton OK cuanto no quieras agregar mas ");
    }    
     
    // for(let contador=1; consultaMarcelo === "si"; contador++){

    //     let producto=prompt("Ingrese el producto");
    //     lista.push(producto)
    //     if( contador%3 == 0){
    //         consultaMarcelo=prompt("Queres agregar mas productos ? coloca 'si' o 'no' ")
    //     }
    // }

    console.log(lista)
}
//listaSuper2()
function listaSuper3() {
    let lista=[];

    let consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca 'si' o 'no' ");

        switch (consultaMarcelo) {
        case "si":
            while(consultaMarcelo == "si"){
                let producto=prompt("Ingrese el producto");
                lista.push(producto)
                consultaMarcelo=prompt("Queres agregar mas productos ? coloca 'si' o 'no' ")
            }
            
            break;
        case "no":
        
            break;
    
        default:
            break;
    }
}



function listaSuper4() {
    let lista=[];
    let consultaMarcelo=prompt("Queres iniciar la lista del super ? coloca 'si' o 'no' ");
    while(consultaMarcelo == "si"){
        for (let contador = 0; contador !== 3; contador++) {
            let producto=prompt("Ingrese el producto");
            lista.push(producto)
            
        }
        consultaMarcelo=prompt("Queres agregar mas productos ? coloca 'si' o 'no' ")
    } 
}


/*---------------------------------------------------*/
//  Teniendo la siguiente lista de precios, hacer una segunda funcion que busque el precio de cada producto y lo sume, mostrando en la consola la suma total a pagar.

//programa que le diga cuanto tiene que pagar 
//lista con productos , una lista de precios

//comparar si esta el producto en la lista de precios , y si esta empezar a hacer la acumulacion de los precios (la suma total)
let lista=["pan","leche","vinagre"];
let totalAPagar=0;
let jubilado=false;

function supermercado(listaCompra) {
    for (producto of listaCompra) {

        switch (producto) {
        case "pan":
            totalAPagar= totalAPagar + 300
            break;
        case "leche":
            totalAPagar= totalAPagar + 80
            break;
        default:
            break;
        }
    }
}

if(jubilado == true){
    totalAPagar
}