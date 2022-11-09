//Objetos : key ,propiedad o clave y su valor  
let listaTalles=["S","M","L","XL"];

let taza={
    marca:"pepita",
    precio:1000,
    oferta:true,
    colores:["rosa","azul","blanca"],
    material:"ceramica"
}

let pantalon={
    marca:"Levis",
    talles:listaTalles,
    material:"jean",
    precio:5000,
    stock:20,
}
let remera={
    marca:"Juanita",
    talles:["L","XL"],
    precio:2000,
    stock:20
}

// indice           0       1       2
let listaProductos=[taza,remera,pantalon];

//          listaProductos[1] -> remera
//              remera.talles -> ["L","XL"]
console.log(listaProductos[1].talles.push("XXL"));


//tambien puedo acceder a lo mismo de esta manera:
let tallesRemera=remera.talles;

tallesRemera.push("XXL")
console.log(tallesRemera)

//console.log(pantalon)
//* ------ para acceder/obtener el valor de una propiedad de un obtejo 

//objeto.propiedad

console.log(pantalon.precio)

//anteriormente se obtenia objeto["propiedad"]
// console.log(remera["marca"])



//* ------  modificar el valor de la propiedad crear una propiedad
//objeto.propiedad= nuevoValor
remera.precio=3000;
remera.stock+= 10;
remera.stock-= 1;

//remera.stock = ++remera.stock -> esto suma 1 unidad al valor en objetos 
//remera.stock+= 1 es lo mismo que remera.stock = remera.stock +1 (funciona tambien con el menos)

//crea una propiedad
pantalon.tela="jean"


/*----- elminar una propiedad       */
//delete objeto.propiedad
delete pantalon.material



 console.log(listaProductos)