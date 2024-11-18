require('dotenv').config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const userRoute = require("./routes/usersRoute.js");

const body=require('body-parser');
const app = express() 
const connectDB = require('./utils/db.js');
connectDB();

app.use(cors({
     origin: ["http://localhost:5175"],
     methods: ['GET','POST','PUT',"DELETE"],
     credentials: true
}))
app.set('view engine', 'ejs');
app.use(morgan('tiny'));
app.use(express.json());
app.use(cookieParser());


app.use("/api/users", userRoute);
app.use(express.static('Public'))
app.use(body.json());


const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
  try {
    const saltRounds = 12;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
  } catch (error) {
    console.error('Error hashing password:', error);
  }
};

hashPassword('password123');

//using the app object in another file
if (require.main === module) {
    // This module was run directly from the command line (i.e. this is the main module)
    app.listen(8007, () => {
      console.log("Server is running")
    });
  }

  module.exports = app; // Export the app object  


