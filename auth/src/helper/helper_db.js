const mongoose = require('mongoose')
const {db} = require('./../configuration')

module.exports.connectDB = () => {
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    return mongoose.connection
}
const Keyboard = mongoose.model('Keyboard', { name: String });

const ducky  = new Keyboard({ name: 'ducky' });
const Logitech  = new Keyboard({ name: 'Logitech' });
ducky.save().then(() => console.log('auth DB is work ALLLLLLLLLLLLLLLLLL - OK !'));
//Logitech.save().then(() => console.log('nodemon is work - OK !'));
