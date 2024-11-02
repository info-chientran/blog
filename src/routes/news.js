import express from 'express';
import newController from '../app/controllers/NewsController.js';

const newsRouter = express.Router();

newsRouter.use('/:slug', newController.show);
newsRouter.use('/', newController.index);

export default newsRouter;