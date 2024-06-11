const app = require('./app')
const colors = require('colors')
var x = 2;
const arr = [1, 2, 3, 4, 7, 9, 1];
let result = arr.filter((item) => {
    //console.log(item)
    return item === 1
})
console.log(result)

console.log("Hello, World!".red);
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());