// const app = require('./app');
// const database = require('./database');
// const config = require('./config');

// database().then(info => {
//     console.log('туть1');
//     console.log('Connect to', info.host, info.port, info.name);
//     console.log('туть2');
//     app.listen(config.PORT, () => {
//         console.log('Server has been started....')
//     });
// }).catch(() => {
//     console.log('error with connect database: ');
//     process.exit(1);
// });


const mongoose = require('mongoose');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const config = require('./config');
const bparser = require('body-parser');
const bookRoute = require('./routes/books');

let app = express();
app.use(bparser.json());
let hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.engine('hbs', hbs.engine)
//для того чтобы hbs работал
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.urlencoded({
    extended: true
}));
//для регистрации routes
app.use(bookRoute);
app.use(express.static(path.join(__dirname, 'public')));

async function start() {
    try {

        await mongoose.connect(config.dburi, {
            useNewUrlParser: true,
            useFindAndModify: false
        })

        app.listen(config.PORT, () => {
            console.log('Server has been started....')
        })
    } catch (e) {
        console.log('error: ', e)
    }
}

start()