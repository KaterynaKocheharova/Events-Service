import express from 'express';
import eventsRouter from './events.js';
import usersRouter from './participants.js';

const router = express.Router();

router.use('/events', eventsRouter);
router.use('/users', usersRouter);

export default router;
