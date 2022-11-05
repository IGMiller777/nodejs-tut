const express = require('express');
const app = express();
const fs = require('fs');

app.use( (req, resp) => {
    resp
        .sendStatus(209)
        .sendFile(__dirname + '/index.html');
})

app.listen(3000)