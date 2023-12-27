const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/eTrade");

const db = mongoose.connection;

db.on("connection",(err)=>{
    if(err) throw err;
    console.log('====================================');
    console.log("connection established successfully");
    console.log('====================================');
});

module.exports = db;