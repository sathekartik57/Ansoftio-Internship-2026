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


app.put("/users/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const updatedUser = await User.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // updated data return karega
        );

        res.json({
            message: "User updated successfully",
            data: updatedUser
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});