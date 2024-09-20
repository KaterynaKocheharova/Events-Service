import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import express from 'express';

const router = express.Router();
router.get('/', ctrlWrapper());

export default router;
