//vectores, arrays,arreglos, listas 
//como se escribe ? -> se escribe entre corchetes y cada item se separa con una coma 
// indice                 0           1                   2               3            4
let listaAlumnos=["Alejandro Lopez","Julia Rodriguez","Ana Perez","Mario Bros","Laura Lepes"]// todo lo que este entre los corchetes es parte de la lista

console.log(listaAlumnos)

//como acceder a un valor o item de la lista:con el indicie
listaAlumnos[0]

//Metodos!!

//agregue un item a la lista: push() unshift()

//push() agregue un item al final de la lista

listaAlumnos.push("Maria Mores","Jose Pepes","Luciano Castro");

//unshift()agregue un item al inicio de la lista

// listaAlumnos.unshift("Maria Mores","Jose Pepes","Luciano Castro");

//length -> el largo de la listaa, la cantidad de items

listaAlumnos.length

//sacar un item de la lista : pop() shift()

//pop() saca el ultimo item de la lista

//listaAlumnos.pop();

//shift() saca el primer item de la lista

//listaAlumnos.shift();

//splice(indice,cantidad,nuevoItem) 
//si lo que quiero es:
//a)  borrar un item que no este al inicio o final 

listaAlumnos.splice(2,2)

//b)  si quiero reemplazar un item por otro

listaAlumnos.splice(5,1,"Maria Morales")
//listaAlumnos.splice(1,2,"otro alumno",'otro alumno mas')


//indexOf() -> en que indice esta algun item

let indiceAlumnx=listaAlumnos.indexOf("Julia Rodriguez");

listaAlumnos.splice(indiceAlumnx,1)



