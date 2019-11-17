// const mongoose = require('mongoose');
// const config = require('./config');

// // module.exports = () => {
// //     return new Promise((resolve, reject) => {
// //         mongoose.Promise = global.Promise;
// //         mongoose.set('debug', true);

// //         //mongoose.connection.on('error', error => reject(error)).on('close', () => console.log("Database connection closed")).once('open', () => resolve(mongoose.connection[0]));
// //         console.log('туть db');
// //         mongoose.connect(config.dburi, {
// //             useNewUrlParser: true,
// //             useFindAndModify: false,
// //             useUnifiedTopology: true
// //         });
// //     });
// // };

// async function startDB() {
//     try {
//         await mongoose.connect(config.dburi, {
//             useNewUrlParser: true,
//             useFindAndModify: false
//         })
//     } catch (e) {
//         console.log('error: ', e)
//     }
// }