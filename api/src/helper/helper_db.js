const mongoose = require('mongoose')
const {db} = require('./../configuration')

module.exports.connectDB = () => {
    mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    return mongoose.connection
}
const Keyboard = mongoose.model('Keyboard', { name: String });

const ducky  = new Keyboard({ name: 'ducky' });
ducky.save().then(() => console.log('DB is work ALLLLLLLLLLLLLLLLLL - OK'));