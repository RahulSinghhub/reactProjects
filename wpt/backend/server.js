// const express = require("express");
// const mysql = require("mysql2");
// const app = express();
// const cors = require("cors");

// app.use(express.json());
// app.use(cors());

// const db = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"1234",
//     database:"studentExpress"
// });


// db.connect((err,data)=>{
//     if(err) {
//         console.log("db error");
//     }
//     else {
//         console.log("db connected");
//     }
// });

// app.get("/getStudents",(req,res)=>{
//     db.query("select * from students",(err,data)=>{
//         if(err){
//             console.log("getsudent db error")
//         }else{
//             res.send(data);
//         }
//     })
// })

// app.get("/getStudents/:id",(req,res)=>{
//     db.query("select * from students where id=?",[req.params.id],(err,data)=>{
//         if(err){
//             console.log("get one studnt db error");
//         }
//         else{
//             res.send(data);
//         }
//     })
// })

// //for creating new data or say inserting new values in databases
// app.post("/insert",(req,res)=>{
//     const {
//         id,
//         name,
//         address,
//         mobno,
//         branch
//     }=req.body;
//     db.query("insert into students values(?,?,?,?,?)",[id,name,address,mobno,branch],(err,data)=>{
//         if(err){
//             console.log("create studnt db error");
//         }
//         else{
//             res.send(data);
//         }
//     })
// })

// app.delete("/delete/:id", (req, res) => {
//     const id = req.params.id;
//     db.query("DELETE FROM students WHERE id = ?", [id], (err, data) => {
//         if (err) {
//             console.log("deletion error:", err);
//             res.status(500).send("Database error");
//         } else {
//             res.send(data);
//         }
//     });
// });

// app.put("/update/:id",(req,res)=>{
//     const id = req.params.id;
//     const {name,address,mobno,branch} = req.body;
//     db.query("update students set name=? ,address=? ,mobno=? ,branch=? where id=?",[name,address,mobno,branch,id],(err,data)=>{
//         if(err){
//             console.log("updation error");
//         }
//         else{
//             res.send(data);
//         }
//     })
// })
// app.post("/login",(req,res)=>{
//     db.query("select * from user where email="+req.params.email+"password"+req.params.password,(err,data)=>{
//         if(err){
//             console.log("error ")
//         }else{
//             if(data.length==0){
//                 res.send({status:false , message:"write something"})
//             }else{
//                 res.send(data);
//             }
//         }
//     })
// })

// app.listen(3000,()=>{
//     console.log("connection established");
// })

const express = require("express")
const app =express();
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"studentExpress"
})

db.connect((err,data)=>{
    if(err){
        console.log("db error in connection");
    }
    else{
        console.log("db connected")
    }
})

app.get("/students",(req,res)=>{
    db.query("select * from students",(err,data)=>{
        if(err){
            console.log("db error in showing all students");
        }
        else{
            res.send(data);
        }
    })
})


app.get("/students/:id",(req,res)=>{
    db.query("select * from students where id="+req.params.id,(err,data)=>{
        if(err){
            console.log("db error in showing particular student"+err);
        }
        else{
            res.send(data);
        }
    })
})



app.post("/insert",(req,res)=>{
    const {id,name,address,mobno,branch} = req.body;
    db.query("insert into students values(?,?,?,?,?)",[id,name,address,mobno,branch],(err,data)=>{
        if(err){
            console.log("db error in posting new students");
        }
        else{
            res.send(data);
        }
    })
})



app.delete("/delete/:id",(req,res)=>{
    db.query("delete from students where id="+req.params.id,(err,data)=>{
        if(err){
            console.log("db error in deleting students");
        }
        else{
            res.send(data);
        }
    })
})



app.put("/updating/:id",(req,res)=>{
    const {name,address,mobno,branch,id} = req.body;
    db.query("update students set name=? ,address=?,mobno=?,branch=? where id=? ",[name,address,mobno,branch,id],(err,data)=>{
        if(err){
            console.log("db error in updating  student details");
        }
        else{
            res.send(data);
        }
    })
})





app.listen(3000,()=>{
    console.log("port is connected");
})
