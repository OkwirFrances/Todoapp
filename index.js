const express = require('express');
const port = 4000;
const path = require('path');

app.listen(port,(err) => {
    if (err) {
        console.log(`Error: ${err}`);
    }
    console.log(`Yupp! Server is running on port ${port}`);
})