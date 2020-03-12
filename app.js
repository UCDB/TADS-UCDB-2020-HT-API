var express = require("express"); //Importing 
var app = express(); // Creating the object

app.listen(3000, ()=>{
   
    console.log("Server running on port 3000");
 
});

app.get("/friends", function (req, res, next) {
    let friends = ["Tony","Lisa","Michael","Ginger","Food"]
    res.json(friends);
});