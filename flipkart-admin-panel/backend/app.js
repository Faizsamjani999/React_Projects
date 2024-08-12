const express = require("express");
const connection = require("./config/db");
const port = 9999;
const app = express();
const cors = require("cors");
const route  = require("./routes/productRoute");


app.use(cors());
app.use(express.json())

app.use("/",route)

app.listen(port,()=>{
    console.log("Server Started At-",port);
    connection();
})