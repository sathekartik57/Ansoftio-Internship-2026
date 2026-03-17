const express = require("express");

const app = express();

app.use(express.json());

let products = [];

// GET API
app.get("/products", (req, res) => {
    res.json(products);
});

// POST API
app.post("/products", (req, res) => {
    const product = req.body;
    products.push(product);
    res.send("Product added successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});