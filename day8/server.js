const express = require("express");

const app = express();

app.use(express.json());

let users = [];

app.get("/users", (req, res) => {
    res.json(users);
});

app.post("/users", (req, res) => {
    users.push(req.body);
    res.send("User added successfully");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});