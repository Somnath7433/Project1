require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("Hello world!2");
})

app.get('/login', (req, res) => {
    res.send('<h1>Login</h1>');
})

app.listen(port, () => {
    console.log(`Localhost running on port ${port}`);
})