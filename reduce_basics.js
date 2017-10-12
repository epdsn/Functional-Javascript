// JavaScript Reduce basics
// Author: Eric Perez
// Assignment #4: JavaScript Pet/Toy 1.0

// Taken from the following tutorial:
// https://www.youtube.com/watch?v=Wl98eZpkp-c&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84&index=3


var orders = [
    {amount: 250},
    {amount: 400},
    {amount: 100},
    {amount: 325}
]

// The basics:

// A way to transform a list.
/* 
var totalAmount = 0 
for (var i = 0; i < orders.length; i++) {
    totalAmount += orders[i].amount;
}
*/

// Reduce without arrow function:
/*
var totalAmount =  orders.reduce(function(sum, order)  {
    console.log("hello", sum, order)
    return sum + order.amount
}, 0)
*/

// with arrow function
// the simpilist way.
var totalAmount =  orders.reduce( (sum, order) => sum + order.amount, 0)


console.log(totalAmount)