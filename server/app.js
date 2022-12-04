require("dotenv").config();
const express = require("express");
const app = express();

const mongoose = require("mongoose");
require("./conn");
const users = require("./userSchema");
const cors = require("cors");
const router = require("./routes");

const port = process.env.PORT || 8003;

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json("server start")
})

app.use(router);

app.listen(port, () => {
    console.log(`server is start port number ${port}`);
});