function validaArray(arr,num){

    try{

        if(!arr && !num) throw new ReferenceError('Expected 2 arguments, but it was not found.');
        
        if(typeof arr !== 'object') throw new TypeError('The first parameter must be an array!');
        
        if(typeof num !== 'number') throw new TypeError('The second parameter must be an number');
        
        if(arr.length !== num) throw new RangeError('Array must have the same size of the second parameter');

        return arr;

    }catch(e){
        if(e instanceof RangeError){
            console.log('RangeError');
            console.log(e.stack);
        } else if(e instanceof ReferenceError){
            console.log('ReferenceError');
            console.log(e.stack);
        } else {
            console.log('Uncaught Error');
            console.log(e.stack);
        }
    }

}

console.log(validaArray([1,2,3],0));