import {Link} from "react-router-dom";

export default function ListItemHome ({dato,infoPath}){
  


    return(
        <li  className="btn btn-success" >
            <Link to={infoPath}>{dato}</Link>
        </li>
    )
} 


