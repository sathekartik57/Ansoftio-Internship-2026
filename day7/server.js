const express = require("express");

const app = express();

const students = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Aman" },
    { id: 3, name: "Sneha" },
    { id: 4, name: "Rohit" },
    { id: 5, name: "Priya" }
];

app.get("/students", (req, res) => {
    res.json(students);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});