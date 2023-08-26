//I used here chalk nad readLine  package that will work on terminal/ node otherwise on console it will show errors 

const chalk = require('chalk');
var readlineSync = require('readline-sync');
var score = 0;
let highScores= [
  {
    name: "Joe",
    score: "5" 
  },
  {
    name: "Prabhakar",
    score: "4"
  },
]

let questions =[
  {
    question : "What is your city? ",
    answer : 'Lucknow'
  },
  {
    question : "What is your fav animal? ",
    answer : 'dog'
  },
  {
    question : "What is your fav color? ",
    answer : 'royal blue'
  },
  {
    question : "Do you like cats? ",
    answer : 'yes'
  },
  {
    question : "What is your birth year? ",
    answer : '2001'
  },
]

function welcome(){
  var userName = readlineSync.question("What's Your Name? ");
  console.log(chalk.blue('Welcome! ')+userName);
  console.log(); 
}

function play(question,answer){
  let userAnswer = readlineSync.question(question);
 
  if(userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log(chalk.green.bold('You are right.'))
    score++
  }
  else{
    console.log(chalk.red.bold('You are wrong.'))
    score--    
  }
  console.log('Your current score is: '+chalk.yellow.bold(score));
  console.log('------------------------------');
}

function game(){
  for (var i = 0 ; i < questions.length ; i++){
    var currentQuestion = questions[i];
    // console.log(currentQuestion.question);
    // console.log(currentQuestion.answer);
    play(currentQuestion.question,currentQuestion.answer);
  }

}
function showScores(){
  console.log('Your Score is: '+ chalk.yellow.bold(score));
  console.log('------------------------------');
  console.log(chalk.yellow("Check out the high scores, if you should be there ping me and I'll update it"));
  highScores.map(score => console.log(chalk.blue(score.name), " : ", chalk.green(score.score)))
}

welcome();
game();
showScores();