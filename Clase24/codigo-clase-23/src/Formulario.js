import {useState} from 'react';
import {Link} from 'react-router-dom';
/* ejemplo de un formulario controlado.*/

/* "Espiamos" en tiempo real lo que el usuario escribe gracias al estado y los eventos.
Luego , podemos generar verificaciones de que cumpla con lo que le pedimos ingresar*/
/* operador ternario -> condicion ? si-se-cumple-la-condicion : si-no-se-cumple-la-condicion */

export default function Formulario() {
   const [inputName,setInputName]= useState('');
   const [incorrectCh,setIncorrectCh]=useState(false);

    const changeInputName=(e)=>{
        setInputName(e.target.value)// voy actualizando el estado con lo que el usuario ingresa
        
    }
    const showData=()=>{
        if(inputName.length<8){
            setIncorrectCh(true)
        }else{
            setIncorrectCh(false)
        }
    }

    return (
        <div>
        <Link to='/'>Ir a la home</Link>
        <form className="container mt-4" >
            <div className="row mb-3">
                <label 
                htmlFor="inputEmail3" 
                className="col-sm-2 col-form-label"
                >
                    Name
                </label>
                <div 
                className="col-sm-10"
                >
                    <input 
                    type="text" 
                    className="form-control" 
                    id="inputEmail3" 
                    value={inputName} 
                    onChange={changeInputName} 
                    onBlur={showData}/>
                   {incorrectCh === true? <p className='text-danger'>El nombre debe tener como minimo 8 caracteres</p>:''}
                </div>
            </div>
            <div className="row mb-3">
                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputPassword3"/>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
      </div>
    );
  }