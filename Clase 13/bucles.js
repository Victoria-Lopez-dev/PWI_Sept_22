//indice        0       1       2   3
let nombres=["Juan","Maria","Pepe","Ana","Juan","Martin","Pepe","Ana"];
let numeros=[12,45,111,500,400];
let productos=[];
let total=0;
// console.log("Bienvenido/a/e " + nombres[0]);
// console.log("Bienvenido/a/e " + nombres[1]);
// console.log("Bienvenido/a/e " +nombres[2]);
//bucles o estructuras de repeticion: me permiten hacer una misma accion varias veces

//el largo del array ( la cantidad de items que tenia) length : numero con la cantidad de items

//for - for of - while - do while 
//for(primera accion a realizar antes de empezar;condicion ; que accion realiza cuando termina de realizar lo que tiene entre las llaves )
//     
function bucleFor() {
    for(let i=0;i< nombres.length ;i++ ){
        //accion que quiero que se haga multiples veces
                            
        console.log("Bienvenido/a/e " + nombres[i])

    }    
    // for (let i = 0; i < 5; i++) {
    //     let numero=parseInt(prompt("ingrese un numero"))
    //   //total = 4 +  1
    //     total=total + numero
        
    // }

    //...

    //for of
    //(nombreAsignado of nomrbeArray)

    for(let num of numeros){
        total=total+num
        console.log(total)
    }
    console.log(total)
}      




//while 
//while(condicion){}

function bucleWhile() {
    while(productos.length <6){
        let nuevoProducto=prompt("Ingrese un producto")
        productos.push(nuevoProducto)
    }    
}


//do while -> hace la accion una vez y despues se fija la condicion para ver si lo repite

function bucleDoWhile() {
    do{
        let nuevoProducto=prompt("Ingrese un producto")
        productos.push(nuevoProducto)
    }while(productos.length <0)
};



// array.forEach((itemDelArray)=>{})

numeros.forEach((num)=>{
    total=total+num
});

//filter() -> filtra segun lo que coloque en su funcion interna y me devuelte ( si coloco el return) un array

const resultadoFiltro=numeros.filter((num)=>{ return num < 100 });
//find()

console.log(numeros.find((num)=>{ return num < 100 }));


//map()

let numerosConDescuento=numeros.map((num)=>{ return num * 0.5});

//introduccion Objetos

let precios =["remera",4521,"zapatilla",456,"pantalon",2000,"sombrero",4500,"medias",1000];

//objeto {
//     propiedad:valor, 
//     propiedad:valor
// }
const remera ={
    precio:4521,
    marca:"Juanita",
    stock:20
}
let zapatilla={
    precio:456,
    marca:"adidas",
    colores:["rojo",'blancas',"azul"]

}

