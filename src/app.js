import express from 'express';
import routers from './routers/index.js';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';


const app = express();
app.use(cors());
app.use(routers);
app.use(notFoundHandler);
app.use(errorHandler);


export default app;
