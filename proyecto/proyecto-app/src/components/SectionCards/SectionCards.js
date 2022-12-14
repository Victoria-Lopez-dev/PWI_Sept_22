import Card from "../Card/Card";
import './SectionCards.css'

import{useState} from 'react';


export default function SectionCards() {

    let [datos,setDatos]=useState([]);

    const traerInfo=async()=>{
 
        let info= await fetch("https://rickandmortyapi.com/api/character")
                        .then(respuesta => respuesta.json())
                        .catch(error => console.log("HAY UN ERROR!!" +error))
        return info
        
    }

    const mostarInfo =async ()=>{
        let dato= await traerInfo()
        let infoPersonajes= dato.results
            setDatos(infoPersonajes)
          
     }


    return(
        <section >
            <button onClick={mostarInfo}>click</button>
            <div className="section-cards">
           
                {datos.map((dato)=>{ return <Card key={dato.id} info={dato}/>})} 
            </div>
        </section>
    )
}
/* fetch()  */