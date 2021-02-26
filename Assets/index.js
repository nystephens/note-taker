// this script includes functions to operate the note taker UI
const server = require('../server');
const fs = require('fs');

// a function to validate the note
// function validateNote() {

// }


// this is a create new note function copied from module proj and edited.  
function createNote(body, notesArray) {
    // note is the body of req
    const note = body;
    notes.push(animal);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}

module.exports = createNote;