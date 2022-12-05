import './App.css';
import Navegacion from './components/nav/Navegacion';

//componente funcional
export default function App() {

 //funciones que quiero implementar en el sitio
 //atributos ,eventos, estado de la informacion
  let persona={
    nombreP:"Ana",
    edad:20
  }

  return (
    <div className="componente-app">
      <Navegacion datos="Productos" nombres={persona}/>
      <main>
        <h1>Titulo Principal</h1>
        <h2>Hola soy otro titulo</h2>      
      </main>
      <Navegacion datos="Contacto" />
    </div>
  );
}

//componentes de clase

// class App extends React.Component{
//   render(){
//     return(
//       <div className="componente-app">
//         <h1>Titulo Principal</h1>
//         <h2>Hola soy otro titulo</h2>
//       </div>
//     )
//   }
// }

//todos los componentes deben devolver 1 solo elemento 

//export default App;



