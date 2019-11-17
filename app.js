// const express = require('express');
// const exphbs = require('express-handlebars');
// const bparser = require('body-parser');
// const bookRoute = require('./routes/books');

// const app = express();
// app.use(bparser.json());
// let hbs = exphbs.create({
//     defaultLayout: 'main',
//     extname: 'hbs'
// });


// app.engine('hbs', hbs.engine);
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// app.use(express.urlencoded({
//     extended: true
// }));

// app.use(bookRoute);
// app.use('/css', express.static(__dirname + '/css'));
// console.log('туть app');

// module.exports = app;