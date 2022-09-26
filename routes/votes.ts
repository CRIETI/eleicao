const routerVote = require('express').Router();
const votesController = require('../controllers/VotesController');

routerVote.get('/votes', votesController.index);
routerVote.post('/vote', votesController.create);

module.exports = routerVote;
