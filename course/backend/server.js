const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors  = require("cors");



const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"courses"
})

db.connect((err)=>{
    if(err) throw err;
    console.log("db connected");
});
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    const sql = "select * from course";
    db.query(sql,(err,data)=>{
        if(err) return res.json("error");
        return res.json(data)
    })
})


 app.post("/insert",(req,res)=>{
    const sql = "insert into course (id,cname,fees,duration,des) values(?,?,?,?,?)";
    const values = [
        req.body.id,
        req.body.name,
        req.body.fees,
        req.body.dur,
        req.body.des
    ]
    db.query(sql, [values],(err,data)=>{
        if(err) return res.json(err);
        return res.json(values);
    })


 })
// app.post("/log/insert")


app.listen(3002,()=>{
    console.log("connected to server")
})

