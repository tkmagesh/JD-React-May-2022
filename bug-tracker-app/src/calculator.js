
export function add(x,y){
    return x + y;
}

export function subtract(x,y){
    return x - y;
}

//The above two functions are assembled in a 'module' object and the module object is exported

const utils = {
    isEven(n){
        return n % 2 === 0;
    }
}

export default utils;

//The above is exported as a default entity and there can be ONLY ONE default export from a file
