const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host :"localhost",
    user:"root",
    password:"1234",
    database:"studentExpress"
})
db.connect();


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.set("views" , path.join(__dirname,"views"))
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    db.query("select * from students",(err,data)=>{

         res.json(data);

        res.render(data);

    })
});

app.get("/Show",(req,res)=>{
    res.render("Show");
})

app.post("/",(req,res)=>{
    db.query("insert into students values (default,?,?,?,?)",[req.body.id,req.body.cname,req.body.fees,req.body.duration,req.body.id])

})



app.listen(3002,()=>{
    console.log("connected");
})



