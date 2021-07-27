import { response, Router } from 'express';
import getParams from './controllers/searchController.js';
import postRequest from './models/create.js';

const routes = Router();

routes.get('/search', async (req, res) => {
  const query = req.query;

  for (const key in query) {
    const response = await getParams[key](query);

    res.send(response);
  }
});

routes.post('/create', async (req, res) => {
  const body = req.body
  await postRequest(body)

  return res.json({message: 'cadastrado'})
})

export default routes;
