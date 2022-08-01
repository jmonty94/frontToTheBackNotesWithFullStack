const fs = require('fs')
const path = require('path');

const getNotesHTML = function (req, res) {
    res.sendFile(path.join(__dirname, './../public/notes.html'))
};

const getIndexHTML = function (req, res) {
    res.sendFile(path.join(__dirname, './../public/index.html'))
}





module.exports = { getNotesHTML, getIndexHTML }