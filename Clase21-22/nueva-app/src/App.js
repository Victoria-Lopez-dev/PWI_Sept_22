import './App.css';
import {useState,useEffect} from'react';
import Titular from './Titular';
import Lista from './Lista' ;

function App() {
  //let nombre="Ana"; //estado 
  // nombre valor inicial : "Ana"; setNombre()
  let [nombre,setNombre]= useState("Ana");
 // al hacer click en el boton cambiar el nombre de "Ana" a "Jose" 


  let dato=["item8","item4","otroDato"]

  const cambiarNombre =()=>{
    
    //nombre="Jose"
    //uso el setter para cambiar el valor actual del estado
    if(nombre === "Ana"){
      setNombre("Jose")
    }else{
      setNombre("Romi")
    }
    if(nombre === "Romi"){
      setNombre("Ana")
    }
  }

  /* hook que nos permite ejecutar funciones en distintos momentos del ciclo de vida del componente*/
  useEffect(()=>{
    console.log("Se cargo/actualizo el componente")
  },[])

  /* este console.log() solo se ejecuta cuando nota que el estado nombre se modifico*/
  useEffect(()=>{
    console.log("El estado nombre se modifico")
  },[nombre])

  return (
    <div className="App">

      <h1 onClick={cambiarNombre}>Hola Soy un titulo</h1>

      <Titular nombrePersona={nombre}/>
      
      <button className="btn btn-success" onClick={cambiarNombre}>{nombre}</button>

      <Lista infoItems={dato}/>


    </div>
  );

}

export default App;

//estamos pasando como props un estado 
//prop -> nombrePersona     estado -> nombre