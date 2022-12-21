import {useState} from 'react';

export default function Card({info}) {
    const[ocultar,setOcultar]=useState(true);

    const mostrar =()=>{
        console.log(info)//objeto con la info del personaje
        setOcultar(false) //nos ayuda a mostrar el contenedor de info
    }

    const ocularInfo=()=>{
        setOcultar(true) //nos ayuda a ocultarlo el contenedor de info
    }

    return(
        <div className="bg-primary my-5 d-flex ">
            <div>
                <img src={info.image} alt={info.name}/>
                <h2 >{info.name}</h2>

                <button onClick={mostrar} className={ ocultar === true ?"bg-success":"d-none"}>Now More..</button>  

                {/* puedo o utilizar 
            ocultar? <button onClick={mostrar}>Now More..</button>  :''*/}          
            </div>
            {ocultar ==false?
                <div>
                    <button className="bg-warning" onClick={ocularInfo}>X</button>
                    <ul className="list-group">
                        <li className="list-group-item">Character Status {info.status}</li>
                        <li className="list-group-item">Species {info.species}</li>
                        <li className="list-group-item">Origin {info.origin.name}</li>
                        <li className="list-group-item">Gender {info.gender}</li>
                    </ul>
                </div>:''
            }
        </div>
    )
}