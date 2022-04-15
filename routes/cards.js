const express = require('express');
const router = express.Router();

const cardsCtrl = require('../controllers/cards');

/* GET users listing. */
router.get('/', cardsCtrl.index);
// GET Add new card validation
router.get('/new', cardsCtrl.new);
// GET individual card
router.get('/:id', cardsCtrl.show);
// GET edit page for individual card
router.get('/:id/edit', cardsCtrl.edit);
// POST /card add new card
router.post('/', cardsCtrl.create);
// Delete /card/:id
router.delete('/:id', cardsCtrl.delete);
// PUT Revised card
router.put('/:id', cardsCtrl.update);


module.exports = router;