/* eventos nos permiten interactuar con el usuario, escucha una accion que realiza en el navegador y realiza una accion

handlers -> parte que se encarga de "escuchar"cuando realiza una accion en el sitio
funcion -> las acciones que vamos a ejecutar cuando se produzca ese evento */
function suma() {

    return contador++
}
// ejecutando
//console.log(suma(2,4))

/* definiendo el evento desde JavaScript*/

/* nodo.addEventListener(tipoDeEvento,funcion) */

let botonClick = document.querySelector("button"); 
let botonDesplegar= document.querySelector("#boton-desplegar");
let menu=document.querySelector("ul");
let vinculo = document.querySelector("a")
let contador=0;
let flag=true;



botonClick.addEventListener("click",(event)=>{
    alert("Se clickeo el boton!")
    console.dir(event)
    suma()
});

const funcionDefinida=()=>{

    if(flag == true){
       document.querySelector('h1').style.backgroundColor="pink"; 
       flag=false
    }else{
        document.querySelector('h1').style.backgroundColor="transparent"; 
        flag=true
    }

}

botonClick.addEventListener("mouseover",funcionDefinida);

botonDesplegar.addEventListener("click",()=>{
    menu.classList.toggle("mostrar");
})


vinculo.addEventListener("click",(event)=>{
    
    event.preventDefault()// cancelar la accion por defecto que realiza (vincular)
    document.querySelector("body").classList.add("fadeOut");
    setTimeout(()=>{window.location.href="./hoja2.html"},2500) // redirigir a otra pagina luego de 3segundos asi aguarda a que termine de mostrarse la animacion
    //setTimeout(funcion,miliseg de delay)
})
//botonClick.addEventListener("click",suma);

/* definiendo el evento desde HTML y JS*/


const agrandar=(e)=>{
    console.log(e)
    botonClick.style.padding="10px"
    console.log(20+40)
}


constenvioPersonal=(event)=>{
    event.preventDefault()
}