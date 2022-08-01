
const fs = require('fs');
const path = require('path');

const getNotes = function(req,res) {
    fs.readFile(path.join(__dirname,'./../db', 'db.json'), 'utf-8', (err,data) => {
        if(err) {
            return res.status(400).json({err})
        }
        res.json(JSON.parse(data));
    })
};













module.exports = {getNotes};