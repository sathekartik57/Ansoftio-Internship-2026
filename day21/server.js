const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const app = express();

app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://127.0.0.1:27017/internship")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));

// Schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

// Model
const User = mongoose.model("User", userSchema);

// REGISTER API
app.post("/register", async (req, res) => {
    
    try {
        const { email, password } = req.body;

        // Password hash
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            email: email,
            password: hashedPassword
        });

        await user.save();

        res.send("User registered successfully");
    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});


app.listen(5000, () => {
    console.log("Server running on port 3000");
});
