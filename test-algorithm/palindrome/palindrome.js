// Solution 1
function palindrome(word){
    return word.split('').reverse().join('') === word;
}

// // Solution 2
// function palindrome(word){
//     let reversed = word.split('').reduce((reversed, char) => char + reversed);
//     return reversed === word;
// }
// // Solution 3
// function palindrome(word){
//     let reversed = '';

//     for (let i = word.length - 1; i >= 0; i--) {
//         reversed += word[i];
//     }

//     return reversed === word;
// }

// // Solution 4
// function palindrome(word){
//     let reversed = '';

//     for (const char of word) {
//         reversed = char + reversed;
//     }

//     return reversed === word;
// }

module.exports = palindrome;