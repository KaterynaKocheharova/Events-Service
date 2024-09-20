import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { getEventsController } from '../controllers/events.js';
import express from 'express';

const router = express.Router();
router.get('/', ctrlWrapper(getEventsController));

export default router;
