const express = require("express");
const { Cheking, addData, getData, deleteData, updateData } = require("../controller/productController");

const route = express.Router();

route.get("/",Cheking);

route.post("/addProduct",addData)

route.get("/productData",getData)

route.delete("/deleteData/:id",deleteData)

route.put("/updateData/:id",updateData);

module.exports = route;