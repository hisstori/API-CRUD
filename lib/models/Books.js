const mongoose = require('../db/connection')

const Schema = mongoose.Schema

const Book = new Schema({
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: {
        date: String,
    },
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String],
})

module.exports = mongoose.model('Book', Book)