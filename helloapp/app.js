// const http = require('http');
// http.createServer(function (request, response) {
//     response.end('Hello, Anna!!!')
// }).listen(3000, "127.0.0.1", function () {
//     console.log('Server start to listen new request ');
// }) 

// const os = require('os')
// let userName = os.userInfo().username;
// const greeting = require('./greetings')

const User = require('./user');

let anne = new User('Anna', 22);
console.log(anne.sayHi());