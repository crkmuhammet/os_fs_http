const http = require('http');


//  req : incoming request
//  res : server response
const server = http.createServer((req, res) => { // 8080 portunda response'u görürüz. Request ise ApiCall ile servisimize gelen isteği belirtir.

    if (req.url === '/') {
        res.end('Homepage');
    }
    if (req.url === '/about') {
        res.end('About page');
    }
    res.end(
        "<h1>Opps!</h1>" +
        "<p>Page is unavailable</p>" +
        "<a href='/'>Back to the homepage</a>"
    );
});

server.listen(8080); // 8080 Portunu açar ve dinler.