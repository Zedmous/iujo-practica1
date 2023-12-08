const colors = require('colors');
console.log("Bienvenidos a la primera practica")
const uniforme = (x,k)=>{

    let prob= Number((x/k).toFixed(4))
    return {prob}
}
const suma =(a,b) =>{

    return a+b
}

console.log("Este console es para mostrar el uso del push")

console.log(`La probabilidad calculada es: `+`${uniforme(3,6).prob}`.green)