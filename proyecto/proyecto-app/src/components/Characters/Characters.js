import Navegation from '../Navegation/Navegation';
import Filters from "../FIlters/Filters";
import SectionCards from "../SectionCards/SectionCards";
import{useEffect, useState} from 'react';

export default function Characters() {
    let [datos,setDatos]=useState([]);
 
    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }


     useEffect(()=>{

        const mostarInfo =async ()=>{
            let dato= await traerInfo()
            let infoPersonajes= dato.results
            setDatos(infoPersonajes)
            
        }
        mostarInfo()
     },[])


    return(
        <div>
            <Navegation />
            <Filters />
            <SectionCards datos={datos} />
        </div>
    )
}