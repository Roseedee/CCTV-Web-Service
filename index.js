const express = require('express');
const app = express();
const part = require('path');
const hbs = require('hbs');

const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//default
// app.set('views', part.join(__dirname, 'views'));
// app.set('style', part.join(__dirname, 'static/css/'))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Listen on port ${port}`);
});