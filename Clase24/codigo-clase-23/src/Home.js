import {Link} from 'react-router-dom';
export default function Home() {
  return (
    <div className="App">
    <a href='https://www.google.com/' >Ir a Google</a>

        <h1>Home</h1>

        <Link to='/formulario'>Ir al Formulario</Link>
    </div>
  );
}

/* utilizo <Link> por que quiero que me vincule a un componente , no a una hoja html, o un id o pagina externa*/