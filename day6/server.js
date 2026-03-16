const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to Ansoftio Backend Internship");
});

app.get("/about", (req, res) => {
    res.send("This is the About Page");
});

app.get("/contact", (req, res) => {
    res.send("Contact us at ansoftio.com");
});

app.get("/services", (req, res) => {
    res.send("Our services include web development and backend APIs");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});