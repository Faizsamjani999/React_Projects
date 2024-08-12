const express = require("express");
const { default: mongoose } = require("mongoose");
require("dotenv").config()

const connection = async()=>{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected");
}

module.exports = connection;