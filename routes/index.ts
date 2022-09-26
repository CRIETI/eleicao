import cors from 'cors';
const router = require('express').Router();
const users = require('./votes');

router.use(cors());

router.use(users);

export default router;
