const express=require("express");
const bodyParser=require("body-parser");
const app= express();
let items=[];
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
  let today = new Date();
  let currentDay = today.getDay();
  let options={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
let day=today.toLocaleDateString("en-US",options);
  res.render("list",{kindOfDay:day,addNewItems:items});
});
app.post("/",function(req,res){
  let item= req.body.newItem;
  items.push(item);
  res.redirect("/");
});
app.listen(3000, function(){
  console.log("i wanna show theworking model to anirudh!");
});
