import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Formulario from './Formulario';
import Home from './Home';
/* rute del sitio, donde indicamos a que componente mostrar segun lo que indicquemos en el navegador*/
/*  a veces se importa BrowserRouter as Router, para en vez de colocar la palabra BrowserRouter usemos la palabra Router*/

export default function Routeo(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path='/formulario' element={<Formulario/>}/>
            </Routes>
        </BrowserRouter>
    )
} 
