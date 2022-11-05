const PORT = 3000;
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

    let basePath = '';

    switch(req.url) {
        case '/':
            basePath: createPath('index');
            res.statucCode = 200;
            break;
        case '/about-us':
            res.statucCode = 301;
            res.setHeader('Location', 'index');
            res.end();
        case 'contacts':
            basePath = createPath('contacts');
            break;
        default:
            basePath = createPath('error');
            res.statucCode = 404;
            break;
    }

    if(req.url === '/') {
        fs.readFile('./views/index.html', (err, data) => {
            if(err) {
                console.log(err);
                res.end();
            } else {
                res.write(data);
                res.end();
            }
        })
    }
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log('Listeneing port 3000')
})