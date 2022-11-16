//API Aplication Programing Interface
//coneccion entre servidor el navegador

//cosas mas simples , funciones que podemos utilizar mas simple

//cocina  -  mozx -  cliente 
// servidor - API - navegador

//DOM -> tener la info de todo el HTML, elementos objetos-> info:propiedades y valores
// elementos del HTML -> nodos 

//arbol de nodos

//obtener los nodos del HTMl

//metodos 
//querySelector() -> nos trae al primer nodo que cumple con esa condicion

let tituloSecundario= document.querySelector("#titulo");//que ubique("traiga") al elemento(nodo) del HTML que tiene de id ="titulo"

let texto= document.querySelector("p");//al primer <p> -> objeto 
let item1= document.querySelector(".item-lista");
let ul= document.querySelector('ul');// solo quiero al primero

//querySelectorAll()

let todosLosTextos= document.querySelectorAll("p");// TODOS los <p> -> lista de objetos

//vemos el contenido del elementos, sus propiedades y valores.
//console.dir(tituloSecundario);

//para acceder a las propiedad : nodo.propiedad (como cualquier objeto)
//innerText o textContent -> texto interno que contiene un nodo/elemento

//console.log(tituloSecundario.innerText);

tituloSecundario.innerText="Otro titulo";

texto.textContent="ahdajkhdkladueyrewnfbsdmbsiud";

// es lo mismo que : document.querySelector("#titulo").innerText="Otro titulo";

//tomar todos los parrafos y cambiar el contenido de ellos

for(parrafo of todosLosTextos){
    parrafo.textContent="Aca estoy cambiando a todos los textos";
}


//propiedad que nos permite el manejo de CLASES

//para agregar una clase classList.add(nombre de la clase)

ul.classList.add("decorado");

//para eliminar una clase classList.remove(nombre de la clase);
tituloSecundario.classList.remove("claseTitulo");

//toggle :si ve que tiene la clase, la elimina;caso contrario la agrega
//array(lista)
todosLosTextos[1].classList.toggle("item-lista");
todosLosTextos[1].classList.toggle("item-lista");
ul.classList.add("fondo2")
document.querySelector("nav").classList.add("unaClase")


// propiedad style -> le agregamos el atributo "style" al elemento
console.dir(tituloSecundario.style)

tituloSecundario.style.backgroundColor="red";
tituloSecundario.style.border="2px solid black";
// tituloSecundario.style.backgroundColor="violet"; esto "pisa" a background-color 
//background-color escribimos como camelCase
//backgroundColor

//innerHTML -> accedemos a la estructura HTML interna del elemento
//ul.innerHTML

let seccion = document.querySelector("section");
let contenidoPrueba=document.querySelector(".contenidoPrueba");
let main= document.querySelector("main")
seccion.innerHTML=`
    <h2>Soy una seccion del sitio</h2>
    <div class="fondo2">
        <p>Soy un parrafo de una seecion ,tengo texto dentro blablabdjbakjsbdksa</p>
        <button>Ace click aqui!</button>
    </div>    
    `;

contenidoPrueba.innerText="<h2 class='titulo'> ahkkajsdhakjshd</h2>";

console.dir(main)

//crear elementos- nodos para agregar el HTML

//crear un elemento
//document.createElement(etiqueta a crear) (nodo)
let textoCreado=document.createElement("p");

//crear su contenido(cambiamos el valor de la propiedad textContent)
textoCreado.textContent="Texto creado todo desde DOM con createElement!!!!!"

//adjuntarlo al HTML
//nodoPadre.appendChild(nodo a adjuntar)
main.appendChild(textoCreado)


let imagenNueva=document.createElement('img');

imagenNueva.setAttribute("src","../clase7/image/hamburguesa.png");

main.appendChild(imagenNueva)


//manipular atributos
let navegador=document.querySelector("nav");
let anclaGoogle=document.querySelector("a");

//setAttribute(el atributo,valor del atributo) crear un atributo y su valor ; o modificar el valor de un atributo
navegador.setAttribute("id","navegacion");
tituloSecundario.setAttribute("id","titular2")
imagenNueva.setAttribute("src","../clase7/image/hamburguesa.png");

//nodo.getAttribute(atributo)
console.log(anclaGoogle.getAttribute("href"))


//nodo.removeAttribute(atributo)
