function isPalindrome(string){
    if(!string) return 'enter with a string';

    let clean = string.split(' ').join();
    clean = clean.split('').reverse().join('');

    return clean === string.split(' ').join('');
}

console.log(isPalindrome('ama ama'));