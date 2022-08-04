const fs = require('fs');
const path = require('path');

const getNotes = function (req, res) {
    fs.readFile(path.join(__dirname, './../db', 'db.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(400).json({ err })
        }
        res.json(JSON.parse(data));
    })
};

const newNote = function (req, res) {
    const { title, text } = req.body;
    fs.readFile(path.join(__dirname, './../db', 'db.json'), 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ err });
        }
        if (title && text) {
            let storedNotes = JSON.parse(data);
            console.log(storedNotes);
            let newId;
            if (storedNotes.length === undefined || storedNotes.length === 0) {
                newId = 1;
            } else {
                newId = storedNotes[storedNotes.length - 1].id + 1;
            }
            console.log(newId);
            const newNote = {
                title,
                text,
                id: newId
            }
            storedNotes.push(newNote)
            console.log(storedNotes);
            fs.writeFile(path.join(__dirname, './../db/db.json'), JSON.stringify(storedNotes), err => {
                if (err) {
                    return res.status(400).json({ err });
                }
                res.json(storedNotes)
            })
        } else {
            res.status(400).json({ error: 'No Note provided'})
        }
    })
}

const deleteNoteByID = function (req, res) {

    console.log(req.params.noteId, 50);
    const idForDeletion = parseInt(req.params.noteId);
    console.log(typeof idForDeletion);
    console.log(idForDeletion);
    fs.readFile(path.join(__dirname, './../db/db.json'), 'utf-8', (err, data) => {
        let storedNotes = JSON.parse(data);
        const filteredNotes = storedNotes.filter(
            note => note.id !== idForDeletion
        )
        console.log(filteredNotes);
        fs.writeFile(path.join(__dirname, './../db/db.json'), JSON.stringify(filteredNotes), err => {
            if (err) {
                return res.status(400).json({ err });
            }
            res.status(200).json(filteredNotes)
        });
    });
};

module.exports = { getNotes, newNote, deleteNoteByID };