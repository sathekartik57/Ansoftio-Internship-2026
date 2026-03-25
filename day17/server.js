const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/internship")
.then(() => console.log("✅ DB Connected"))
.catch(err => console.log("❌ Error:", err));

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// Model
const User = mongoose.model("User", userSchema);

// GET API - Fetch users
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" });
    }
});

// Server start
app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});