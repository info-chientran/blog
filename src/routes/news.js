import express from 'express';
import newController from '../app/controllers/NewsController.js';

const newsRouter = express.Router();

newsRouter.get('/:slug', newController.show);
newsRouter.get('/', newController.index);

export default newsRouter;
