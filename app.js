const colors = require('colors');
console.log("Bienvenidos a la primera practica")


const uniforme = (x,k)=>{

    let prob= Number((x/k).toFixed(4))
    return {prob}
}

console.log(`La probabilidad calculada es: `+`${uniforme(3,6).prob}`.green)