// This is where we run the script for the server and its content.

// import dependancies
const fs = require('fs');
const express = require('express');
const path = require('path');

// assign PORT to current process envirnoment or port 3001
const PORT = process.env.PORT || 3001;
// assign express to variable app 
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});