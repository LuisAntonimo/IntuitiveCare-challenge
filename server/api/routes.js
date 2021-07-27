import { Router } from 'express';
import getParams from './controllers/searchController.js';

const routes = Router();

routes.get('/search', async (req, res) => {
  const query = req.query;

  for (const key in query) {
    const response = await getParams[key](query);

    res.send(response);
  }
});

export default routes;
