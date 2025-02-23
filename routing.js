const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    //SET CORRECT CONTENT TYPE BASED ON EXTENSION NAME
    switch (extname) {
        case '.css':
            contentType = 'text/css';
            break;
        case '.js':
            contentType = 'application/javascript';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
        case '.jpeg':
            contentType = 'image/jpeg';
            break;
    }

    //FOR HTML FILESs
    if (!extname) {
        switch (req.url) {
            case '/':
                filePath = path.join(__dirname, 'index.html');
                res.statusCode = 200;
            break;
            
            case '/notes':
                filePath = path.join(__dirname, 'notes', 'notes.html');
                res.statusCode = 200;
            break;
            
            case '/calculator':
                filePath = path.join(__dirname, 'calculator', 'calculator.html');
                res.statusCode = 200;
            break;

            case '/weather':
                filePath = path.join(__dirname, 'weather', 'weather.html');
                res.statusCode = 200;
            break;
 
            case '/activity':
                filePath = path.join(__dirname, 'activity', 'activity.html');
                res.statusCode = 200;
            break;

            default:
                filePath = path.join(__dirname, '404.html');
                res.statusCode = 404;
                break;
        }
    }

    //READ FILE
    fs.readFile(filePath, (err, data) => {
        if (err) {
            console.error(`Error reading file ${filePath}:`, err);
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>500 - Server Error</h1>');
        } else {
            res.setHeader('Content-Type', contentType);
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', () => {
    console.log('Server running at http://localhost:3000/');
});
