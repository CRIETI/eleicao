import express, { } from 'express';
import VotesController from '../controllers/VotesController';
const routerVote = express.Router();

routerVote.get('/votes', VotesController.index);
routerVote.post('/vote', VotesController.create);

export default routerVote;
