// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


//********Solution 3 using reduce function - Advanced********//

function reverse(str){
    return str.split('').reduce((rev, char)=>
    char + rev, '');    
}

module.exports = reverse;

//******Solution 1 using reverse function - easy********//

/*function reverse(str) {
    let reverse;
    reverse = str.split('').reverse().join('');
    
    return reverse;
}*/

//********Solution 2 using new for loop syntax - moderate********//

/*function reverse(str){
    let reverse = '';

    for (let character of str){
        reverse = character + reverse;
    }

    return reverse;
}*/