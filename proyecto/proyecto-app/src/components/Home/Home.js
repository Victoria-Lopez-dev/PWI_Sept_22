import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";

export default function Home() {

    let informacion={
        email:"sjahdkh@kjhdf.com",
        telefono:6546
    }
    /* creamos la variable informacion para demostrar que podemso pasar de un componente a otro informacion de cualquier tipo*/
    return(
        
        <header className="bg-primary">
            <h1>Proyect - Rick & Morty</h1>
            <nav>
                <ul>
                    <ListItemHome dato="Characters" otraData="true"/>
                    <ListItemHome dato="Contact" info={informacion}/>
                    <ListItemHome dato="Otro item"/>
                    
                </ul>
            </nav>
        </header>
    )
}

