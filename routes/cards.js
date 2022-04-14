var express = require('express');
var router = express.Router();

const cardsCtrl = require('../controllers/cards');

/* GET users listing. */
router.get('/', cardsCtrl.index);

// router.get('/:id', cardsCtrl.show);

module.exports = router;
