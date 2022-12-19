import Navegation from '../Navegation/Navegation';
import Filters from "../FIlters/Filters";
import SectionCards from "../SectionCards/SectionCards";
import{useEffect, useState} from 'react';

export default function Characters() {
    let [datos,setDatos]=useState([]);
    let [infoCompleta,setInfoCompleta]=useState([]);
 
    const mostrarValor =(event)=>{

        // se fija si esta o no checked,tildado
        if(event.target.checked){
                let datoFiltro=event.target.value;
                if(datoFiltro === "Alive" || datoFiltro === "Dead"){
                let resultado= datos.filter((ch)=> ch.status === datoFiltro)//nuevo array con solo los elementos que cumplen la condicion
                    setDatos(resultado)
                }
                if(datoFiltro === "Female" || datoFiltro === "Male"){
                    let resultado= datos.filter((ch)=> ch.gender === datoFiltro)
                    setDatos(resultado)
                }
                if(datoFiltro === "unknown"){
                    let resultado= datos.filter((ch)=> ch.origin.name === datoFiltro)
                    setDatos(resultado)
                } 
                
         }else{
            setDatos(infoCompleta)
         }
    }

    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

      //saco la funcion por fuera para que lo pueda utilizar en mi funcion del evento
    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
        console.log(infoPersonajes)
        setDatos(infoPersonajes)
        setInfoCompleta(infoPersonajes)
    }
    //Se ejecuta cuando se renderiza la pagina
     useEffect(()=>{
        mostarInfo() 
     },[])


    return(
        <div>
            <Navegation />
            <section className='bg-success d-flex p-2'>
                <Filters nombreFiltro="Character Alive" datoFiltro="Alive" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="Character Dead" datoFiltro="Dead" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="Female" datoFiltro="Female" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="Male" datoFiltro="Male" muestraValor={mostrarValor}/> 
                <Filters nombreFiltro="Origin Unknown" datoFiltro="unknown" muestraValor={mostrarValor}/> 
            </section>
                          
            <SectionCards datos={datos} />
        </div>
    )
}