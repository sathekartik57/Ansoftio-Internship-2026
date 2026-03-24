const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/internship")
.then(() => console.log("✅ DB Connected"))
.catch(err => console.log("❌ Error:", err));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);

app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();

        res.send("✅ User saved to database");
    } catch (error) {
        res.status(500).send("❌ Error saving user");
    }
});

app.listen(3000, () => {
    console.log("🚀 Server running on port 3000");
});