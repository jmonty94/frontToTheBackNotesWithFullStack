const router = require('express').Router();
const notesController = require('./../../../controllers/notesController');

router.route('/')
    .get(notesController.getNotes)


module.exports = router;