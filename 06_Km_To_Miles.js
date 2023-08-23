//Convert Kilometer to Miles, meters, centimeter
const userKm = parseFloat(prompt('Enter the Kms To convert in differnt units:')) ;
let mile = (userKm * 0.62137);
let meter = (userKm * 1000);
let cm =  (userKm * 100000);

console.log('Kilometer in miles are :'+mile);
console.log('Kilometer in meters are :'+meter);
console.log('Kilometer in centimeters are :'+cm);