// const http = require('http');
// http.createServer(function (request, response) {
//     response.end('Hello, Anna!!!')
// }).listen(3000, "127.0.0.1", function () {
//     console.log('Server start to listen new request ');
// }) 

// const os = require('os')
// let userName = os.userInfo().username;

// const User = require('./user');

// let anne = new User('Anna', 22);
// console.log(anne.sayHi());

// const welcome = require('./welcome');
// welcome.getEveningMessage();
// welcome.getMorningMessage();

// const greeting = require('./greetings')

// global.name = 'Ivan';
// global.consolelog(date);
// console.log(greeting.getMessage());

let nodePath = process.argv[0];
let appPath = process.argv[1];
let name = process.argv[2];
let age = process.argv[3];
console.log("nodePath: " + nodePath);
console.log("appPath: " + appPath);
console.log();
console.log("name: " + name);
console.log("age: " + age);