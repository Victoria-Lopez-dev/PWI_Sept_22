
export default function ListItemHome ({dato,otraData,info}){
  
    const mostrar =()=>{
        console.log(info)
        alert(otraData)
   }

    return(
        <li onClick={mostrar} className="btn btn-success" >{dato}</li>
    )
} 


