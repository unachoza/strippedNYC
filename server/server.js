const express = require('express');
const app = express();
const port = 3000
// const quotes = require('./db/quotes.js')
 
 
app.get('/', (req, res) => res.send('Hello Everyone'))
app.get('/quotes', (req,res) => res.send(quotes))
app.use('*', (req,res) => res.status(404).send('404 Not Found'))
app.listen(port, () => console.log(`Running on port ${port}`))