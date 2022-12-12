import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";
import {useState} from 'react';

export default function Home() {

    let informacion={
        email:"sjahdkh@kjhdf.com",
        telefono:6546
    }
    let [unValor,setValor]=useState(true);//array [estado , metodo para cambiar el valor del estado]
//  let unValor=[true];
    /* creamos la variable informacion para demostrar que podemso pasar de un componente a otro informacion de cualquier tipo*/
    
    const cambiarValor=()=>{
        console.log("se cambio el valor de la variable unValor")
        setValor(false)
    }
    return(
        
        <header className="bg-primary">
            <h1 onMouseOver={cambiarValor}>Proyect - Rick & Morty</h1>
            <nav className="navbar">
                <ul className="d-flex justify-content-between">
                    <ListItemHome dato="Characters" otraData={unValor}/>
                    <ListItemHome dato="Contact" info={informacion}/>
                    <ListItemHome dato="Otro item"/>
                    
                </ul>
            </nav>
        </header>
    )
}

