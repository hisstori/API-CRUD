const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/books-api', { useNewUrlParser: true });
module.exports = mongoose;