const colors = require('colors');
const { Discretas } = require('./clases/discretas');
console.log("Bienvenidos a la primera practica")
const discretas = new Discretas();
console.log(`La probabilidad calculada es: `+`${discretas.uniforme(3,6).prob}`.green)