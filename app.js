const colors = require('colors');
const { Calculadora } = require('./clases/calculadora');
console.log("Esta seccion es de la calculadora")
const calculadora = new Calculadora();
console.log(calculadora.getCont())
const calculadora2 = new Calculadora();
console.log(calculadora2.getCont(),calculadora2.edad)