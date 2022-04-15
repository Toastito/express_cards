const express = require('express');
const router = express.Router();

const cardsCtrl = require('../controllers/cards');

/* GET users listing. */
router.get('/', cardsCtrl.index);
// GET Add new card validation
router.get('/new', cardsCtrl.new);
// GET individual card
router.get('/:id', cardsCtrl.show);
// POST /card add new card
router.post('/', cardsCtrl.create);
// Delete /card/:id
router.delete('/:id', cardsCtrl.delete);

// router.get('/:id', cardsCtrl.show);

module.exports = router;