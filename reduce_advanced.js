// Need babel for some of the commands to work like:
// import

// import the fs namespace from node:
var fs =  require('fs')  // the old way to import
// the new es6 way! :D
//import fs from 'fs'

var output = fs.readFileSync('userdata.txt', 'utf8') // must use utf8 for character encoding otherwise it will just show the bites
    .trim() // remove the last line break
    .split('\r\n') // split the string array with a line break
    .map(line => line.split('\t'))
    .reduce((customers, line) => {
        customers[line[0]] = customers[line[0]] || []
        customers[line[0]].push({
            name: line[1],
            price: line[2],
            quantity: line[3]
        })
        return customers
    }, {})


console.log('output', JSON.stringify(output, null, 2))  // puts it into a nice JSON format. :D yay!

