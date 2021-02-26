// This is where we run the script for the server and its content.

// import dependancies
const fs = require('fs');
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const nodemon = require('nodemon');

// import notes database json
const notes = require('./Develop/db/db.json');

// assign PORT to current process envirnoment or port 3001
const PORT = process.env.PORT || 3001;
// assign express to variable app 
const app = express();


app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));


// sets up homepage when server is loaded
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});

// sets up response for /notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

// set up API response
app.get('/api/notes', (req, res) => {
    res.json(notes);
});


// set up POST request for notes
app.post('/api/notes', function (req, res) {
    let note = req.body;

    console.log(note);
    notes.push(note);
    
    res.send(notes);
});

// ALTERNATE POST REQUEST EXAMPLES:

// POST request example with createNewNote()
// app.post('/notes', (req, res) => {

//      // set id for note based on what the next index of the array will be
// ID should be unique so look into npm packages that create those ids.  otherwise if this works it is viable for MVP use.

//     req.body.id = notes.length.toString();

//     const note = createNewNote(req.body, notes);
//     res.json(note);
// });

// POST Request example with validation:
// app.post('/notes', (req, res) => {
//     // set id for note based on what the next index of the array will be
//     req.body.id = notes.length.toString();

//     if (!validateNote(req.body)) {
//         res.status(400).send('The note is not properly formatted.');
//     } else {
//         const note = createNewNote(req.body, notes);
//         res.json(note);
//     }
// });


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

// console.log(notes);