// const http = require('http');

// let message = ' Dear Ivan, My congratulations!'

// http.createServer(function (request, response) {
//     console.log(message);
//     response.end(message);
// }).listen(3000, "127.0.0.1", () => {
//     console.log('Server starts');
// })

const fs = require('fs')
const zlib = require('zlib');


let readableStream = fs.createReadStream('./hello.txt', 'utf-8');

let writableSteam = fs.createWriteStream('hello.txt.gz');

let gzip = zlib.createGzip();

readableStream.pipe(gzip).pipe(writableSteam)