const express = require("express");
const router = express.Router();


//posts
//index users
router.get("/",(req,res)=>{
    res.send("Get for  posts");
});
//show users - users
router.get("/:id",(req,res)=>{
    res.send("Get for  posts id");
});
//post users
router.post("/",(req,res)=>{
    res.send("post for posts");
});
router.delete("/:id",(req,res)=>{
    res.send("Delete for posts id");
});
module.exports = router;