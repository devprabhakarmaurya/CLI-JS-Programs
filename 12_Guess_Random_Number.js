//Write a JavaScript program that generates a random number between 1 and 100, and then lets the user guess the number. The program should provide feedback to the user, letting them know if their guess was too high, too low, or correct. The user should be able to keep guessing until they guess the correct number.

let randomNum = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log("Random Number: " + randomNum); // for checking purpose otherwise
console.log('Guess the Number and Win: ')
while(true){
    let userInput = parseInt(prompt('Guess the Number: '));
    if(isNaN(userInput)){
        console.log('Please enter the valid input.');
    }
    else if(userInput > randomNum){
        console.log('Too Higher ! try lowe value');
    }
    else if (userInput < randomNum){
        console.log('Too Lower! try higher value')
    }
    else{
        console.log('You guess the right number !');
        break;
    }
    
}