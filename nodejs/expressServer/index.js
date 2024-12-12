const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.use((req, res) => {
    res.status(404).send('404 - Page Not Found');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
