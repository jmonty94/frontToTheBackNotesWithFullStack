const router = require('express').Router();
const {getNotes, newNote, deleteNoteByID} = require('./../../../controllers/notesController');

router.route('/')
    .get(getNotes)
    .post(newNote)
router.route('/:noteId')
    .delete(deleteNoteByID)


module.exports = router;