const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/internship")
.then(() => console.log("DB Connected"))
.catch(err => console.log(err));
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const User = mongoose.model("User", userSchema);
app.post("/users", async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send("User added successfully");
});
app.get("/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
});
app.put("/users/:id", async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.send("User updated successfully");
});
app.delete("/users/:id", async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.send("User deleted successfully");
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});