function unique(array){
    let unique = new Set(array);
    return [...unique];
}

const arr = [20,20,29,44,55,399,54525,3,3,545349,3];

console.log(unique(arr));