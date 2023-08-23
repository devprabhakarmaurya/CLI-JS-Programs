// To check positive, negative, zero 
let userNum = prompt('Enter the Number to Check: ');
if (isNaN(userNum)){
    console.log('Please enter the valid input ');

}
else if (userNum > 0){
    console.log('The Number is Positive.');
}
else if (userNum < 0 ){
    console.log('The Number is Negative')
}
else{
    console.log('The Number is Zero.')    
}