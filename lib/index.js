const express = require("express");
const app = express();
const parser = require("body-parser");
const book = require("./models/books");

app.use(parser.json());

app.get('/', function(req, res) {
    book.find({}).then(books => {
        res.json(books);
    });
});

app.get('/books', function(req, res) {
    book.find({}).then(books => {
        res.json(books);
    });
});




app.listen(3250, () =>
console.log("Hearing you loud and clear!")
);