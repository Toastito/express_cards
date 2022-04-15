const Cards = require('../models/card');

module.exports = {
    index,
    show,
    new: newCard,
    create,
    delete: deleteCard
}

function index(req, res) {
    let cards = Cards.getAll();
    res.render('cards/', { cards })
}

function show(req, res) {
    console.log(req.params.id);
    let card = Cards.getOne(req.params.id);
    res.render('cards/show', { card });
}

function newCard(req, res) {
    res.render('cards/new');
}

function create(req, res) {
    const card = JSON.parse(JSON.stringify(req.body));
    console.log(card);
    Cards.create(card);
    res.redirect('/cards');
}

function deleteCard(req, res) {
    Cards.removeOne(req.params.id);
    res.redirect('/cards');
}