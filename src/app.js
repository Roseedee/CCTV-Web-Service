require('dotenv/config')

const express = require('express');
const path = require('path');
const hbs = require('hbs');
const router = require('./routes/router');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//static file
app.use(express.static('static'));

app.use(router)

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    res.send(`Username : ${username} <br>Password : ${password}`);
})

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});