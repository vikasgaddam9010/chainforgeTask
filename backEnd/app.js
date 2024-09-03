const express = require("express")
const path = require('path')
const {open} = require('sqlite')
const cors = require("cors")
const emailExistence = require("email-existence")

emailExistence.check('vikasgaddam9010@gmail.com', function(err,res){
   console.log('res: '+res);
});

const app = express()
app.use(express.json())
app.use(cors())



app.listen(5000, () => {console.log("Started")})