const express = require("express")
const path = require('path')
const {open} = require('sqlite')
const sqlite3 = require('sqlite3')
const cors = require("cors")
const bcrypt = require('bcrypt')
const validator = require('email-validator');

let database = null 

const startDataBase = async () => {
  try{
    database = await open({
      filename: path.join(__dirname, 'users.db'),
      driver: sqlite3.Database,
    })
  }catch (e){
    console.log(e.message)
    process.exit(1)
  }
}

startDataBase()

const app = express()
app.use(express.json())
app.use(cors())

app.post("/register/", async (req, res) => {
  console.log(req.body) 
  try{
    const {email, password} = req.body
    const userCheckInDatabase = await database.get(`SELECT * FROM users WHERE mail = '${email}';`)
    if(userCheckInDatabase === undefined){
      const hashedPassword = await bcrypt.hash(password, 10)
      console.log(hashedPassword)
      await database.run(`INSERT INTO users (mail, hashed_password) VALUES ('${email}','${hashedPassword}');`)      
      res.status(200).send({message: "Successfully Registered"})
    } else{
      res.status(400).send({message: "User Already Registered"})
    }
  }catch(e){
    res.status(400).send({message: e.message})
  }
})


app.listen(5000, () => {console.log("Started")})