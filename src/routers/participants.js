import express from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';

const router = express.Router();
const jsonParser = express.json();

router.get(
  '/participants',
  jsonParser,
  ctrlWrapper(),
);

router.post(
  '/register',
  jsonParser,
  validateBody(),
  ctrlWrapper(),
);


export default router;
