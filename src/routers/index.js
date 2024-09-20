import express from 'express';
import eventsRouter from './events.js';
import participantsRouter from './participants.js';

const router = express.Router();

router.use('/events', eventsRouter);
router.use('/participants', participantsRouter);

export default router;
