const colors = require('colors');
const { Calculadora } = require('./clases/calculadora');
const { Discretas } = require('./clases/discretas');

console.log("Bienvenidos a la primera practica")
console.log("Esta seccion es de las probabilidades")
const discretas = new Discretas();
console.log(`La probabilidad calculada es: `+`${discretas.uniforme(3,6).prob}`.green)
console.log("Esta seccion es de la calculadora")
const calculadora = new Calculadora();
console.log(calculadora.getCont())
const calculadora2 = new Calculadora();
console.log(calculadora2.getCont(),calculadora2.edad)
