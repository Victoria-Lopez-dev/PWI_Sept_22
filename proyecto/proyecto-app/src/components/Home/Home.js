import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";
import {useState} from 'react';

/* Este componente corresponde a la pagina inicial (la del cuadrado blanco con los botones.
    La navegacion de las hojas secundarias las hacemos en el componente Navegation*/

export default function Home() {
    /* tanto la variable informacion , como el estado unValor, son ejemploas para mostrar useState como funciona y la diferencia entre estado y props*/
    let informacion={
        email:"sjahdkh@kjhdf.com",
        telefono:6546
    }
    /* creamos la variable informacion para demostrar que podemso pasar de un componente a otro informacion de cualquier tipo*/
    let [unValor,setValor]=useState(true);
    //array [estado , metodo para cambiar el valor del estado]

    
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
                
                    
                </ul>
            </nav>
        </header>
    )
}

