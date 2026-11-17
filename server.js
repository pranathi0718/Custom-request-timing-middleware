const express = require('express');
const app = express();

app.use((req, res, next) => {
    const startTime = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.url} - ${duration} ms`);
    });

    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to Node.js');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
