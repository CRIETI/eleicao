import cors from 'cors';
import express, { } from 'express';
import routerVote from './votes';
const router = express.Router();

router.use(cors());

router.use(routerVote);

export default router;
