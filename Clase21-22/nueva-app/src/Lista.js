export default function Lista ({infoItems}) {

    return(
        <ul className="my-4">
            {infoItems.map((itemDelArray)=>{
              return  <li key={itemDelArray} className="btn btn-primary">{itemDelArray}</li>
            })}
        </ul>
    )
}

/* cuando utilizo array para armar elementos o componentes le tengo que agregar a cada elemento o componente una prop llamada "key" que tiene como valor un dato unico (como si fuera un id) que le sirve a React para identificarlos entre si */

/* uso llaves dentro del return() cuando quiero hacer algo de JS : una funcion , variables,etc.
 y en los parametros el componente cuando de todas las props solo quiero buscar alguna */