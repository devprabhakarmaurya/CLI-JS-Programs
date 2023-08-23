// Generate Random number using math class by user input
let minNum = parseInt(prompt('Enter the minimum value: '));
let maxNum = parseInt(prompt('Enter the max value: '));

let randomNum = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum

console.log('The Random Number between '+minNum+' and '+maxNum+' is:'+randomNum);