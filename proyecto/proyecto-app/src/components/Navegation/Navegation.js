import './Navegation.css';
export default function Navegation() {
    return(
       <header className="d-flex bg-primary">
            <h1>Rick & Morty </h1>
            <nav>
                <ul className="d-flex">
                    <li className="mx-2"> Home </li>
                    <li className="mx-2">Characters</li>
                    <li className="mx-2">Contact</li>
                </ul>
            </nav>
       </header>
    )
}

