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













module.exports = { getNotes, newNote };