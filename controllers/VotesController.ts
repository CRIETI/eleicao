import { Request, Response } from 'express';
import { Vote } from "../models/Vote";

class VotesController {

    index = async (req: Request, res: Response) => {
        try {
            const votes = await Vote.findAll({});
            res.json(votes);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

    create = async (req: Request, res: Response) => {
        try {
            const vote = await Vote.create(req.body);
            res.json(vote);
        } catch (error) {
            res.status(400).json({ error: (error as Error).message });
        }
    }

}

module.exports = new VotesController();
