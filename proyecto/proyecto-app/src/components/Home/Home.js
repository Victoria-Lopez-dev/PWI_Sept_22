import "./Home.css";
import ListItemHome from "../ListItemHome/ListItemHome";


/* Este componente corresponde a la pagina inicial (la del cuadrado blanco con los botones.
    La navegacion de las hojas secundarias las hacemos en el componente Navegation*/

export default function Home() {

    return(
        
        <header className="bg-primary">
            <h1 >Proyect - Rick & Morty</h1>
            <nav className="navbar">
                <ul className="d-flex justify-content-between">

                    <ListItemHome dato="Characters" infoPath="/characters"/>
                    <ListItemHome dato="Contact" infoPath="/contact"/>
                    
                </ul>
            </nav>
        </header>
    )
}

