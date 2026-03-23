const mongoose = require("mongoose");
// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/internship")
.then(() => {
 console.log("Database connected successfully");
})
.catch((error) => {
 console.log("Database connection failed", error);
});