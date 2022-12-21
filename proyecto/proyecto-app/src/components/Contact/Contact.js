import Navegation from '../Navegation/Navegation'

export default function Contact(){
    /* Formulario no controlado*/
    
    return(
        <div>
            <Navegation/>
            <div>
                <h2>Contact</h2>
                <h3>Leave us your information so we can contact you</h3>
                <form className="row g-3 mx-4" action=''>
                    <div className="col-md-6">
                        <label htmlFor="nombre" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="nombre" />

                    </div>
                    <div className="col-md-6">
                        <label htmlFor="correo" className="form-label">Email</label>
                        <input type="email" className="form-control" id="correo" />
                    </div>  
                    <div className="col-12">
                        <label htmlFor="mensaje" className="form-label">Mensaje</label>
                        <textarea id="mensaje" className="form-control"></textarea>
                    </div>
                    
                    <div className="col-12">
                    <button type="submit" className="btn btn-primary">Sign in</button>
                    </div>
                </form>
           </div>
        </div>
        
    )
} 

//reutilizamos el componente Navegation que creamos anteriormente, aprovechando que en ambas pagias se utilizan ( Characters y en Contact)