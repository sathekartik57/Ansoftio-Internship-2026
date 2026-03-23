// const express=require("require");
// const app=express();
// app.use(express.json());
// let users=[];
// app.post("/users",(req,res) =>{
//     try{
//         const { name } =req.body;
//         if(!name){
//             throw new Error("name is required");
//         }
//         users.push(req.body);
//         res.send("user added successfully");
//     }catch (error){
//         res.status(400).send(error.message);
//     }
//     });
//     app.listen(3000,() =>{
//         console.log("server running on port 3000");
//     });

const express = require("express");
const app = express();
app.use(express.json());
let users = [];
// POST API with Error Handling
app.post("/users", (req, res) => {
 try {
 const { name } = req.body;
 if (!name) {
 throw new Error("Name is required");
 }
 users.push(req.body);
 res.send("User added successfully");
 } catch (error) {
 res.status(400).send(error.message);
 }
});
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
