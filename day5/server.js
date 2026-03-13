const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Backend Internship - My name is Kartik");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});