const express = require('express');
const app = express();
app.use('/' , function (req,res) {
    res.status(200).json({ message : "Hello there too!!!" });
})

app.listen(3000, () => { console.log("App up!!") })