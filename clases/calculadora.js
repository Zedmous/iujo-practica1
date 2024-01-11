

class Calculadora{

    static cont=0;
    edad=50;
    constructor(){
        Calculadora.cont++;
    }

    getCont =()=>{
        return Calculadora.cont;
    }
    getEdad =()=>{
        return this.edad;
    }
    suma = (a,b)=>{

        let resultado= Number((a+b).toFixed(4))
        return {resultado}
    }
    resta = (a,b)=>{

        let resultado= Number((a-b).toFixed(4))
        return {resultado}
    }

}
module.exports={
    Calculadora
}