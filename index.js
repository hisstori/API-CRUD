// Imports required files and dependencies.
const express = require("express");
const parser = require("body-parser");
const book = require("./lib/models/Books");
const cors = require("cors");
const app = express();

app.use(cors());
//
app.use(parser.json());
// Redirects user to list of all books as JSON data.
app.get("/", function(req, res) {
  book.find({}).then(books => {
    res.json(books);
  });
});
// Full book listing of data.
app.get("/books", function(req, res) {
  book.find({}).then(books => {
    res.json(books);
  });
});
// Searches for and returns books based on the author searched.
app.get("/authors/:authors", function(req, res) {
  book.find({ authors: req.params.authors }).then(books => {
    res.json(books);
  });
});
// Searches for all books in that category.
app.get("/categories/:categories", function(req, res) {
  book.find({ categories: req.params.categories }).then(books => {
    res.json(books);
  });
});
// Searches all books for the matching id number.
app.get("/books/id/:id", function(req, res) {
  book.findById(req.params.id).then(books => {
    res.json(books);
  });
});

app.get("/books/descriptions", function(req, res) {
  book.find({ shortDescription: req.params.shortDescription }).then(books => {
    res.json(books);
  });
});
// Test code for reaching into nested object. (Working)
// app.get('/books/id/:id/:date', (req, res) => {
//     book.findById(req.params.id, {publishedDate: req.params.date})
//     .then(books => {
//         res.json(books)
//     });
// });
app.delete("/books/remove/:id", function(req, res) {
  book.findByIdAndDelete(req.params.id).then(books => {
    res.json(books);
    // res.send(books);
  });
});
// Allows user to add a book to the database.
app.post("/books/new", function(req, res) {
  console.log(req.body);
  res.ssend(req.body);
  });
//
app.put("/books/update/:id", function(req, res) {
  book.findByIdAndUpdate(req.params.id, req.body).then(books => {
    res.json(books);
    // res.send(books);
  });
});
// Tells app what server to listen to.
// app.listen(3280, () => console.log("Hearing you loud and clear!"));

app.set("port", process.env.PORT || 8000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
