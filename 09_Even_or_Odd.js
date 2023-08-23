// To check even and odd from user Input
let userNum = prompt('Enter the Number to Check: ');

if (isNaN(userNum)){
    console.log('Please enter the valid input ');
}
else if (userNum == 2){
    console.log(`${userNum} is Even.` );
}
else if (userNum % 2 == 0){
    console.log(`${userNum} is Even.` );
}
else{
    console.log(`${userNum} is Odd.` );
}
