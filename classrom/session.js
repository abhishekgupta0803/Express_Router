const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({secret:"mysupersecretstring"}));

app.get("/test",(req,res)=>{
    res.send("test sucessful");
})

app.listen(3000,()=>{
    console.log("Server is listening to 3000");
});