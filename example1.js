var animals = [
    { name: "Rocko", species: "dog" },
    { name: "Fluffy", species: "rabbit" },
    { name: "Ginger", species: "dog" },
    { name: "Ed", species: "turtle" },
    { name: "Hamilton", species: "fish" },
    { name: "AJ", species: "snake" },
]

// Using for loop:
console.log("The old old way, with a for loop:")
var names = [];
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}
console.log(names)

// Using the map function:
console.log("The old way (using map):")
var names = animals.map(function(animal) { return animal.name })
console.log(names)

// Map function with arrow syntax
console.log("The ES6 way with => (arrow function):")
var names = animals.map((x) => x.name)
console.log(names)
console.log("Much better and with less code to write! :)")