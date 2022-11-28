//1 cambiar el tema del sitio (noche- dia)
//2 colocar una tarjeta por cada objeto de los productos del JSON
//3 que al hacer click en "comprar" nos sume el producto al chango
//4 que no importa si salgo del sitio y vuelvo a entrar, permanezca la tematica del sitio (Web Storage)

//armar las clases del modo noche, juego entre agregar y sacar una clase de un elemento cuando se clickee un boton en particular

//eventos metodos del DOM -> classList(add - remove - toggle)

//evento click los botones "Tema Dia " y "Tema Noche"

// addEventListener o como atributo : onclick ,onfocus,etc..

// function nombre (params){}
// const nombre = (params)=>{}

//1

const bodySitio= document.querySelector("body");//solo 1 nodo(el primero que cumpla con ese selector)
const botones= document.getElementsByClassName("btn");// un array con todos los nodos que tienen esa clase

let contador=0;


if(localStorage.getItem('tema')== 'noche'){
    bodySitio.classList.add('fondo-noche')
    for (boton of botones) {
        boton.classList.add('btn-noche')
    }
}
if(localStorage.getItem('tema')== 'dia'){
    bodySitio.classList.remove('fondo-noche')
    for (boton of botones) {

        boton.classList.add('btn-primary')
    }
}

if(localStorage.getItem("productosComprados")){
    contador=parseInt(localStorage.getItem("productosComprados"))
    
}

document.querySelector(".circulo").textContent=contador

const aTemaDia = ()=>{
    //body no tenga ninguna clase
    //botones tienen que tener la propiedad btn-primary

    localStorage.setItem('tema','dia')

    if(bodySitio.classList.length != 0){// buscando si tiene o no clases, si la tiene,la saca
        bodySitio.classList.remove('fondo-noche')
    }
         
    for (boton of botones) {
        let stringDeClases=boton.classList.value

       // stringDeClases.includes('btn-primary') //si este string contiene esta palabra : booleano

        if(stringDeClases.includes('btn-primary') == false){
            boton.classList.add('btn-primary')

        }
        if(stringDeClases.includes('btn-noche') == true){
            boton.classList.remove('btn-noche')
        }
    }

    //console.log(botones)

}

const aTemaNoche = ()=>{
    localStorage.setItem('tema','noche')

    bodySitio.classList.toggle("fondo-noche");

      

    for (boton of botones) {
        boton.classList.toggle('btn-noche');
        boton.classList.toggle('btn-primary'); 
    }
  
    // body tenga la clase fondo-noche
    //botones saque el btn-primary y lo reemplacen con btn-noche
}

const agregarAChango=()=>{
    contador=contador+1

    document.querySelector(".circulo").textContent=contador
    localStorage.setItem("productosComprados",contador)

}

