const mongoose = require('mongoose')

module.exports = function () {
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log('Mongo ishladi');
    }).catch((err) => {
        console.log('Mongoda hatolik bor', err);
    })
     
}

