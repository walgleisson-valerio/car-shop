import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).findAll(),
);

routes.get(
  '/:id',
  (req, res, next) => new CarController(req, res, next).findById(),
);

routes.put(
  '/:id',
  (req, res, next) => new CarController(req, res, next).update(),
);

export default routes;