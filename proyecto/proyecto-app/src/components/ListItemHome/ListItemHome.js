export default function ListItemHome ({dato,otraData,info}){
  
    const mostrar =()=>{
        console.log(info)
   }

    return(
        <li onClick={mostrar}>{dato}</li>
    )
} 


