const express =require('express');
const cors=require('cors');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

dotenv.config();

const sequelize=require('./util/database');
const User=require('./model/login');
const TambolaTicket=require("./model/TambolaTicket")


const loginRoute=require("./route/login")
const TambolaTicketRoute=require("./route/tambolaTicket")

const app=express();
app.use(cors());
app.use(bodyParser.json());

app.use("/user",loginRoute)
app.use("tambola",TambolaTicketRoute)

sequelize.sync()
.then(result=>{
    app.listen(process.env.PORT||3000)
})
.catch(err=>{
    console.log(err)
})