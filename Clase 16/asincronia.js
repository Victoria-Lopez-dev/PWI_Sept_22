//definiendo las funciones 


const myDisplayer=(info)=>{
    document.querySelector('p').innerText=info;
}

const myCalculator= async (num1,num2,funcionCallback)=>{
    let suma =await num1+num2;
    funcionCallback(suma);
}



//ejecutandolas 
myCalculator(5,5,myDisplayer)

/* lo que hace JS cuando ejecuto la funcion 
const myCalculator=(5,5,myDisplayer)=>{
    let suma = setTimeout(()=>{5 + 5},50000);
    myDisplayer(suma)
}
*/
// async function name(params) {
//     await 
// }
