const express = require('express');
const app = express();
// const sqlite3 = require('sqlite3');
// var db = new sqlite3.Database(':memory:');

app.get('/', (req, res) => {

    res.send("hello world");
})

app.listen(3001,()=>{
    console.log("app listening port 3001...");
})