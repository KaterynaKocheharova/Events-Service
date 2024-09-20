import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {isValidId} from "../middlewares/isValidId.js";
import { registerParticipantSchema } from '../validation/participants.js';
import { registerParticipantController } from '../controllers/participants.js';

const router = express.Router();
const jsonParser = express.json();

router.get(
  '/',
  jsonParser,
  ctrlWrapper(),
);

router.post(
  '/register/:eventId',
  isValidId,
  jsonParser,
  validateBody(registerParticipantSchema),
  ctrlWrapper(registerParticipantController),
);


export default router;
