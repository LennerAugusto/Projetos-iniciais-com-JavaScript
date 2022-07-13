function validaArray(array, num){
    try{
        if(!array && !num) throw new RefereanceError ("Envie os parametros");
    
        if(typeof array !== 'object') throw new TypeError("Array precisa ser do tipo object");

        if(typeof num !== 'number') throw new TypeError("Array precisa ser do tipo object");

        if(array.lenght !== num) throw new RangeError("Tamanho inválido");

        return array;
    }    
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Esse erro é um ReferenceError!");
            console.log(e.message);
        }
        else    
        if(e instanceof TypeError){
            console.log("Esse erro é um TypeError!");
            console.log(e.message);
        }
        else
        if(e instanceof RangeError){
            console.log("Esse erro é um RangeError!");
            console.log(e.message);
        }   
        else {
            console.log("Ocorreu um tipo de erro não esperado:" + e);
        }
    }
}

console.log(validaArray());