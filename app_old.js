const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let data = {
            name: 'Jorge Bauza',
            age: 31,
            url: req.url
        };

        res.write(JSON.stringify(data));
        //res.write('Hola Mundo');

        res.end();
    })
    .listen(8080);

console.log('Listening to port 8080');