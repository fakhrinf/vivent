const path = require('path')
const express = require('express')
const app = express()
const PORTEVENT = process.env.PORTEVENT;

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/feedback', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/feedback.html'));
});

app.listen(PORTEVENT, () => console.log(`Server run on port ${PORTEVENT}`));