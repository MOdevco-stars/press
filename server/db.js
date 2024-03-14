const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect('mongodb+srv://mirsoonuzbsila001:1234modevco@cluster.7j5tcs3.mongodb.net/modevco')
    .then(() => {
        console.log('Mongo ishladi');
    }).catch((err) => {
        console.log('Mongoda hatolik bor', err);
    })
     
}

