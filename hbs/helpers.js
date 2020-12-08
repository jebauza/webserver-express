const hbs = require('hbs');

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