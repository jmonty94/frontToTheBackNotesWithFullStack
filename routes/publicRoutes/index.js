const router = require('express').Router();
const {getNotesHTML, getIndexHTML} = require('./../../controllers/publicController');


router.route('/notes').get(getNotesHTML)

router.route('/').get(getIndexHTML)

module.exports = router