// Imports required files and dependencies.
const express = require("express");
const app = express();
const parser = require("body-parser");
const book = require("./models/books");
//
app.use(parser.json());
// Redirects user to list of all books as JSON data.
app.get('/', function(req, res) {
        let url = 'http://localhost:3250/books';
        res.redirect(url);
});
// 
// app.get("/books/?", (req, res) => {
//     book.find(req.params.query)
//     .then(books => {
//         res.json(books)
//     });
//   });

app.get('/authors/:authors', function(req, res) {
    book.find({authors : req.params.authors})
    .then(books => {
        res.json(books)
    });
});

app.get('/categories/:categories', function(req, res) {
   book.find({categories : req.params.categories})
    .then(books => {
        res.json(books)
    });
});

app.get('/books/id/:id', (req, res) => {
    book.findById(req.params.id)
    .then(books => {
        res.json(books)
    });
});


app.post('/books/test', function(req, res) {
    book.create(req.body)
    .then(books => {
        res.json(books)
    });
});

app.listen(3250, () =>
console.log("Hearing you loud and clear!")
);