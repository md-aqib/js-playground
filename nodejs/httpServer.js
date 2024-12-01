const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    if (req.url === '/') {
        res.end('Welcome to the Home Page!');
    } else if (req.url === '/about') {
        res.end('About Us');
    } else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
