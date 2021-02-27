// This is where we run the script for the server and its content.

// import dependancies
const fs = require('fs');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const generateUniqueId = require('generate-unique-id');


// import notes database json
const notes = require('./db/db.json');
const { json } = require('body-parser');

// assign PORT to current process envirnoment or port 3001
const PORT = process.env.PORT || 3001;
// assign express to variable app 
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));


// sets up response for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

// set up API response
app.get('/api/notes', (req, res) => {
    res.json(notes);
});


// set up POST request for notes
app.post('/api/notes', function (req, res) {
    let note = {
        title: req.body.title,
        text: req.body.text,
        id: generateUniqueId({
            length: 9,
            useLetters: false
        })
    };

    console.log(note);
    notes.push(note);

    // update db.json 
    fs.writeFile('./db/db.json', JSON.stringify(notes), (error) => {
        if (error) {
            console.log(error);
        }
        res.send(notes);
    });
});

// sets up homepage when server is loaded
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

