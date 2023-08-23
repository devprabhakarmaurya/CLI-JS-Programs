//To check prime number
var userNum =  parseInt(prompt('Enter a number to check: '));
if(isNaN(userNum)){
    console.log('Please enter the valid value.');

}
else if (userNum == 1){
    console.log('1 is neither Prime or Composite.')
}
else if (userNum == 2){
    console.log('2 is Prime.')
}
else if(userNum > 2){
    if (userNum % 2 == 0){
        console.log(`${userNum} is NOT Prime`);
    }
    else{
        console.log(`${userNum} is PRIME`);
    }
}
else{
    console.log(`${userNum} is NOT Prime`);
}