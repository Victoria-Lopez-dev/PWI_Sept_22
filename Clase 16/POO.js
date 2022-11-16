//perros 
//nombre , raza, peso, edad 
// otros paradigmas imperativos 
let perro1={
    nombre:"Pepe",
    raza:"labrador",
    peso:25,
    edad:7,
    ladrar:function ladra(){console.log(this.raza +"landan : Waw")}
}


let perro2={
    nombre:"Lulu",
    raza:"maltes",
    peso:10,
    edad:8,
    ladrar:function ladra(){console.log("Wiw")}
}

//POO(Prog . Orientada a Objetos)

//clase es una "plantilla" con las propiedades y metodos de ese objeto
class Perro{
    constructor(nombrePerro,razaPerro,pesoPerro,edadPerro,capacidadJ){
        this.nombre=nombrePerro,
        this.raza=razaPerro,
        this.peso=pesoPerro,
        this.edad=edadPerro,
        this.capacidadJugar=capacidadJ
    }
    ladrar(){
        console.log("WaW")
    }
    jugar(){
        if(this.capacidadJugar == true){
            console.log("Le gusta jugar")
        }else{
            console.log("no le gusta jugar")
        }
    }
}

class Asistente{
    constructor(nombreA,edadA){
        this.nombre=nombreA,
        this.edad=edadA
    }

    cargarPacientes(animal){
        let listaPacientes=[]
        listaPacientes.push(animal)
    }
}
//objeto a partir de una clase -> instanciar

let perro3 = new Perro("Rocky","mestizo",23,2,true) ;
let perro4 = new Perro("Firulais","cocker",30,1,false);

let asistenteSemana = new Asistente("Marta",28)
let asistenteFinDeSemana =  new Asistente("Juan",52)