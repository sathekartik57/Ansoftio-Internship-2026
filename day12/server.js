const express = require("express");

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log("Request received at:", new Date());
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Middleware Example Working");
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});