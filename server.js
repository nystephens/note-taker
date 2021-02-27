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

// DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
app.delete('/api/notes/:id', (req, res) =>{
    let currentId = req.params.id;
    // save result as variable and Json parse it
    fs.readFile('./db/db.json', (error, result) =>{
        if (error) {
            console.log(error);
        }
        let notesArray = JSON.parse(result);


        
        // for loop, foreach or filter to go through notesArray and writeFile to db.json 
    })
});

// Erika's example:

//delete a notes by id attempt that deletes from dbjson but not rendered view
app.delete('/api/notes/:id', (req, res) => {
    
    notes.filter(notes =>  notes.id != req.params.id);
    console.log(dbnotes.filter(dbnote => dbnote.id != req.params.id))
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify(dbnotes.filter(dbnote => dbnote.id != req.params.id), null, 2)
    );
    res.send('This note will be deleted');
});

// sets up homepage when server is loaded
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});

