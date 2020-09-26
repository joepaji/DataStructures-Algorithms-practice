// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    const reversed = 
    n.toString().split('').reverse().join('');
    
    return parseInt(reversed) * Math.sign(n);
}
module.exports = reverseInt;

// SOLUTION - 1
/*
function reverseInt(n) {
    let negative;
    
    if(n<0){
        negative = true;
        n = n*-1;
    } 

    let reverse = n.toString().split('').reduce((reverse, char)=>
    char+reverse,'');
    reverse = parseInt(reverse);

    return negative ? reverse*-1: reverse;
}*/