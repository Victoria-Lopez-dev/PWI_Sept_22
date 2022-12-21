import {Link} from 'react-router-dom';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <h1 className='App'>Hola</h1>
      <main className='App'>
      <a href='https://www.google.com/' >Ir a Google</a>

        <h1>Home</h1>

        <Link to='/formulario'>Ir al Formulario</Link>      
      </main>

    </Fragment>
    
  );
}

/* utilizo <Link> por que quiero que me vincule a un componente , no a una hoja html, o un id o pagina externa*/
/* el Fragment me permite reemplazar esos <div> que no cumplen una funcion , mas que englobar al componente que renderiza Reac ; en algunos nuevas versiones no se usa Fragment sino <> </> (aunque todavia no funciona en todos los navegadores o editores de codigo)*/
