function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}
var pizza1 = pizzaOven('deep dish','traditional','mozzarella',['pepperoni','sausage']);
console.log(pizza1);
var pizza2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
console.log(pizza2);
var pizza3 = pizzaOven('thin crust', 'buffalo sauce', ['blue cheese', 'gorgonzola'], ['chicken', 'red onion', 'ranch']);
console.log(pizza3);
var pizza4 = pizzaOven('detroit', 'traditional', 'mozzarella', ['tomato', 'basil']);
console.log(pizza4);

// RANDOM PIZZA GENERATOR VVVVVVVVVV

// var crustType = ['deep dish', 'hand tossed', 'thin crust', 'detroit'];
// var sauceType = ['traditional', 'marinara', 'buffalo', 'white'];
// var cheeses = ['mozzarella', 'feta', 'gorgonzola', 'blue cheese'];
// var toppings = ['pepperoni', 'sausage', 'tomato', 'chicken', 'bacon', 'ranch', 'olives'];

// function randomPick(arr) {
//     var i = Math.floor(arr.length * Math.random());
//     return arr[i];
// }

// function randomPizza() {
//     console.log(randomPick(toppings));
// }

// randomPizza();

// function randomPizza() {
//     var pizza = {};
//     pizza.crustType = randomPick(crustType);
//     pizza.sauceType = randomPick(sauceType);
//     pizza.cheeses = randomPick(cheeses);
//     pizza.toppings = randomPick(toppings);
//     return pizza;
// }

// console.log(randomPizza());