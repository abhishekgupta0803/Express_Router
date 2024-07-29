const express = require("express");
const router = express.Router();

//index users
router.get("/",(req,res)=>{
    res.send("Get for  Users");
});

//show users - users
router.get("/:id",(req,res)=>{
    res.send("Get for  Users id");
});
//post users
router.post("/",(req,res)=>{
    res.send("post for users");
});
//delete users
router.delete("/:id",(req,res)=>{
    res.send("Delete for user id");
});

module.exports = router;