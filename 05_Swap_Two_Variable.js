//Swap two variable with temm variable 
let firstNum = parseFloat(prompt('Enter the first number: '));
let secondNum = parseFloat(prompt('Enter the second number: '));


let temp; // creating temp variable 
temp = firstNum;
firstNum= secondNum;
secondNum= temp;

console.log('Before Swapping')
console.log('A = '+firstNum);
console.log('B = '+secondNum);
console.log('After Swapping');
console.log('A = '+firstNum);
console.log('B = '+secondNum);

// Swap two variable without temp variable
firstNum = firstNum + secondNum;
secondNum = firstNum - secondNum;
firstNum = firstNum -secondNum;

console.log('Before Swapping')
console.log('A = '+firstNum);
console.log('B = '+secondNum);
console.log('After Swapping');
console.log('A = '+firstNum);
console.log('B = '+secondNum);

