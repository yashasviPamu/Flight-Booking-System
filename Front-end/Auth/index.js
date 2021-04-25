const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const saltRounds = 10
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const session=require('express-session');
const { object } = require("prop-types");

function getRandomString() {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < 6; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return result;
}

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET","POST"],
    credentials:true
}));

app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
key:"userId",
secret:"subscribe",
resave:false,
saveUninitialized:false,
cookie: {
    expires:60*60*24,
},
})
)
const  db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "password",
    database : "registration"
});
app.post('/register', (req,res) =>{
    const userid=getRandomString(); 
    const username=req.body.username;
    const password=req.body.password;
    const role = req.body.role || "user";
    const fullname = req.body.fullname;
    const gender = req.body.gender;
    console.log();
    bcrypt.hash(password,saltRounds,(err,hash) => {

        if(err)
        {
            res.send({err:err});
        }
    db.query("INSERT INTO users (userid, username, password,role,fullname,gender) values(?,?,?,?,?,?)",
    [userid,username,hash,role,fullname,gender],
    (err,result) => {
        res.send({status:200});
        });
    });
});

app.get("/login",(req,res) =>{
    if(req.session.user)
    {
        res.send({loggedIn: true,user:req.session.user});
    }
    else{
        res.send({loggedIn:false});
    }
});
app.post('/login', (req,res) =>{
    const username=req.body.username;
    const password=req.body.password;
    db.query("SELECT * FROM users WHERE username = ?",
    username,
    (err,result) => {
        if(err)
        {
        res.send({err:err});
        } 

            if(result.length>0)
            {
                bcrypt.compare(password,result[0].password,(error,response) => {
                  if(response)
                  {
                      req.session.user = result;
                      console.log(req.session.user);
                      res.send(result)
                  }
                  else{
                      res.send({message:"Wrong username or password"});
                  }
                })
            }
            else{
                res.send({message:"User doesn't exist"});
            }
        
    });
});
app.listen(3001, ()=>{  
    console.log("running server");
});
