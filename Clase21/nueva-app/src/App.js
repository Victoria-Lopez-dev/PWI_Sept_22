import './App.css';
import {useState} from'react';
import Titular from './Titular';
 

function App() {
  //let nombre="Ana"; //estado 
  // nombre valor inicial : "Ana"; setNombre()
  let [nombre,setNombre]= useState("Ana");
 // al hacer click en el boton cambiar el nombre de "Ana" a "Jose" 

  const cambiarNombre =()=>{
    console.log("se clickeo el boton")
    //nombre="Jose"
    //uso el setter para cambiar el valor actual del estado
    if(nombre === "Ana"){
      setNombre("Jose")
    }else{
      setNombre("Romi")
    }
  }

  return (
    <div className="App">

      <h1>Hola Soy un titulo</h1>

      <Titular nombrePersona={nombre}/>
      <button className="btn btn-success" onClick={cambiarNombre}>{nombre}</button>
    </div>
  );

}

export default App;

//estamos pasando como props un estado 
//prop -> nombrePersona     estado -> nombre