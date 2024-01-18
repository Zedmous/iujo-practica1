

class Discretas{


    constructor(){

    }

    uniforme = (x,k)=>{

        let prob= Number((x/k).toFixed(4))
        return {prob}
    }

}
module.exports={
    Discretas
}