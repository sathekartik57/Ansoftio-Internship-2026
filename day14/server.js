const express = require("express");
const app = express();

app.use(express.json());

let books = [];

// GET
app.get("/books", (req, res) => {
    res.json(books);
});

// POST
app.post("/books", (req, res) => {
    books.push(req.body);
    res.send("Book added successfully");
});

// PUT
app.put("/books/:id", (req, res) => {
    const id = req.params.id;
    books[id] = req.body;
    res.send("Book updated successfully");
});

// DELETE
app.delete("/books/:id", (req, res) => {
    const id = req.params.id;
    books.splice(id, 1);
    res.send("Book deleted successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});