const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/colorP') 
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

 const db = mongoose.connection

 module.exports = db;