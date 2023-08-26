//In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.

// You will need to write a function declaration which will be able to do two things:

// If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)

// If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax

// The expected outcome is that all the dishes' names and prices will be shown in the console output.

// The text below shows the output that your code should produce:

// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74

// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45

let dishes= [
    {
        name:"Italian Pasta",
        priceWithTax:"$ 11.46",
        price: "$ 9.55",
    },
    {
        name:"Rice with Veggies",
        priceWithTax:"$ 10.38",
        price: "$ 8.65",
    },
    {
        name:"Chicken with potatoes",
        priceWithTax:"$ 18.66",
        price: "$ 15.55",
    },
    {
        name:"Vegetarian Pizza",
        priceWithTax:"$ 7.74",
        price: "$ 6.45",
    },

]    

function dishPrice(argument=False){
    if(argument){
        console.log('Price with 20% tax:')
        for(let i=0; i< dishes.length; i++){
            let currentDish = dishes[i];
            console.log(`Dish: ${currentDish.name} Price (incl.tax) ${currentDish.priceWithTax}`);
        }
    }
    else{
        console.log('Price without tax:')
        for(let i=0; i< dishes.length; i++){
            let currentDish = dishes[i];
            console.log(`Dish: ${currentDish.name} Price (excl.tax) ${currentDish.price}`);
        }
    }
}

dishPrice(true);
dishPrice(false)