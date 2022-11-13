const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1/",
    {
        dbName: "IJMTech",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) =>
        err ? console.log(err) : console.log(
            "Connected to IJMTech database")
);
const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
