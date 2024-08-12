const express = require("express");
const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name: String,
    price : Number,
    size : String,
    image : String,
    rating : String,
    category : String
})

const productData = mongoose.model("productData",schema);

module.exports = productData;