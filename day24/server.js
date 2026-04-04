const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

// Secret Key
const SECRET_KEY = "mysecretkey";

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



// ================= REGISTER API =================
app.post("/register", async (req, res) => {
    try {
        const { email, password } = req.body;

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



// ================= LOGIN API (WITH TOKEN) =================
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).send("Invalid password");
        }

        // Generate JWT Token
        const token = jwt.sign({ email: user.email }, SECRET_KEY);

        res.json({
            message: "Login successful",
            token: token
        });

    } catch (error) {
        res.status(500).send("Error: " + error.message);
    }
});



// ================= MIDDLEWARE =================
const authenticate = (req, res, next) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).send("Access denied. No token provided");
    }

    try {
        const verified = jwt.verify(token, SECRET_KEY);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};



// ================= PROTECTED ROUTE =================
app.get("/profile", authenticate, (req, res) => {
    res.send("Welcome to protected profile route");
});



// Server start
app.listen(3000, () => {
    console.log("Server running on port 5000");
});