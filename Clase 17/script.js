//promedio:
//sumo los valores
//a la suma la divido la cantidad -> resultado de suma ? -> undefined 


function funcion1(num) {
    console.log(num+1)
}

 function sumar(numero1,numero2,funcionCallback) {
   let total=  numero1 + numero2
   funcionCallback(total)
}

sumar(20,40,funcion1)

/*
let total= 20 + 40
   funcion1(total)
*/
// me devuelve por consola 61


//---------------------------------------------------------

//JSON : JavaScript Object Notation

let data={
    lenguaje:"HTML",
    interpretadoNavegador:true,
    personasQueLoUtilizan:7878754123154
}

//console.log(data.lenguaje)

//JSON.stringify() -> transformar a JSON lo que le pase

let dataJSON=JSON.stringify(data)
//console.log(dataJSON)

//JSON.parse()-> transforma un JSON a un objeto

//console.log(JSON.parse(dataJSON))


//---------------------------------------------------------
//PROMESAS

//GET : trae informacion - POST : la envia 

// me quiero despertar temprano 
// a ver si desayuno o no 
//respuesta de si se cumplio o no esa promesa : objeto 
//respuesta : me levante / no me levante 
   
const traerInfo=async()=>{
 
    let info= await fetch("https://rickandmortyapi.com/api/character")
                    .then(respuesta => respuesta.json())
                    .catch(error => console.log("HAY UN ERROR!!" +error))
    return info
    
}
// async -await : espera a que termine de procesar el fetch para mostrarlo por consola


const mostarInfo =async ()=>{
   let dato= await traerInfo()
   

   let infoPersonajes= dato.results
    console.log(infoPersonajes)

     infoPersonajes.forEach(personaje => {
        let imagen=document.createElement('img');
        imagen.setAttribute("src",personaje.image);
        document.querySelector(".container").appendChild(imagen)
     });

}
mostarInfo()


const envioPersonalizado=(event)=>{
    event.preventDefault()// no manda el formulario
}

