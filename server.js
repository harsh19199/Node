const http = require('http');

// http.createServer((req, res) => {
//     res.write("<h1>Phle bar khud");
//     res.end();
// }).listen(8000);

// Passing function as a parameter 
// function test(a) {
//     return a * 10;
// }
// // Or
// const test = (a) => a * 10;
const dataControl = (req, res) => {
    res.write("<h1>Hmmm Phle bar khud sa karuga ab");
    res.end();
};
http.createServer(dataControl).listen(8000);