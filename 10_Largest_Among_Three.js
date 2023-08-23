//To check largest among three number?
let firstNum =  parseFloat(prompt('Enter the first number: '));
let secondNum = parseFloat(prompt('Enter the second number: '));
let thirdNum = parseFloat ( prompt (' Enter the third number'));
let largestNum;

if (isNaN(firstNum) || isNaN(secondNum)|| isNaN(thirdNum)){
    console.log('Please enter the valid input.')

}
else{
    if (firstNum > secondNum && firstNum >thirdNum){
        largestNum = firstNum;
    }
    else if(secondNum > firstNum && secondNum > thirdNum){
        largestNum= secondNum ;
    }
    else{
        largestNum = thirdNum;
    }
    console.log(`${largestNum} is the largest among all numbers you entered.`);
}