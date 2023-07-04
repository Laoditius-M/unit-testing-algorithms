//Solution 2
//  function reversestring(word){
//      return word.split('').reverse().join('');
//  }

//Solution 2
function reversestring(str){
    return str.split('').reduce((reversed, char) => char + reversed, '');
}
module.exports = reversestring;