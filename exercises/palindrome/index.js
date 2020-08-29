// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//******SOLUTION 2 - Using every function - not as efficient******/

function palindrome(str) {
    
   return str.split('').every((char, i)=>{
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;


//*****SOLUTION 1 - Using reduce function - good******//
/*
function palindrome(str) {
    let palindrome = '';

    palindrome = str.split('').reduce((palindrome, char)=>
    char + palindrome,'');

    return true ? palindrome===str: false;
}*/