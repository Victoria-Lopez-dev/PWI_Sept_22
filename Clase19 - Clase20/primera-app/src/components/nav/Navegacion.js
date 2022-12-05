import './Navegacion.css'

export default function Navegacion(props){
    return(
        <nav className="row bg-primary ">
            <ul className="px-5">
                <li className="btn btn-danger">{props.datos}</li>
                <li>Sobre Nosotros</li>
            </ul>
            
        </nav>
    )
};