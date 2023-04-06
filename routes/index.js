import express from 'express';
import UsersController from '../controllers/UsersController';
import AppController from '../controllers/AppController';


function appRoutes(app) {
  const route = express.Router();
  app.use('/', route);

  route.get('/status', (req, res) => {
    AppController.getStatus(req, res);
  });

  route.get('/stats', (req, res) => {
    AppController.getStats(req, res);
  });

  route.post('/users', (req, res) => {
    UsersController.postNew(req, res);
  });
}

export default appRoutes;
