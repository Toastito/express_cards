const Cards = require('../models/card');

module.exports = {
    index
}

function index(req, res) {
    let cards = Cards.getAll();
    res.render('cards/', { cards })
};