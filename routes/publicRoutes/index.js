const router = require('express').Router();
const publicController = require('./../../controllers/publicController');


router.route('/notes').get(publicController.getNotesHTML)

router.route('/').get(publicController.getIndexHTML)

module.exports = router