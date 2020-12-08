const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

//helpers 
hbs.registerHelper('getYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalize', (text) => {
    let words = text.split(' ');

    words.forEach((value, index) => {
        words[index] = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    });

    return words.join(' ');
});

app.get('/', (req, res) => {

    res.render('home', {
        name: 'francisdailin cobaS'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});


app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});