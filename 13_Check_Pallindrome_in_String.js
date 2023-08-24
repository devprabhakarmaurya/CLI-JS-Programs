//Write a JavaScript program that takes a string as input from the user and checks if it's a palindrome. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization).
var userInput = prompt('Enter the string to check: ');
function isPallindrom(str){
    var regexPattern = /[^A-Za-z0-9]/g; // regex pattern to replace the alpha numeric values in the string.
    var cleanStr = str.replace(regexPattern,"");
    var cleanStr = cleanStr.toLowerCase(); 
    console.log(cleanStr);
    var reverseStr = cleanStr.split("");
    var reverseStr = reverseStr.reverse();
    var reverseStr = reverseStr.join("");
    return cleanStr === reverseStr;
}
if (userInput === null) {
    console.log('Please enter the valid input.')
}
else{
    if(isPallindrom(userInput)){
        console.log(`${userInput}, is a palindrome.`);
    }
    else{
        console.log(`${userInput}, is a not palindrome.`);
    }
}