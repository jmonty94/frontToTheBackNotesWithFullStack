const router = require('express').Router();
const {getNotes, newNote} = require('./../../../controllers/notesController');

router.route('/')
    .get(getNotes)
    .post(newNote)


module.exports = router;