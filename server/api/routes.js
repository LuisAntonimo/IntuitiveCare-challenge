import { Router } from 'express';
import getParams from './controllers/searchController.js';
import postRequest from './models/create.js';
import putRequest from './models/update.js';
import deleteRequest from './models/delete.js';

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

  return res.json({message: 'Registro cadastrado com sucesso'})
})

routes.put('/ans/:id', async (req, res)=>{
  const body = req.body
  const id = req.params.id

  await putRequest(id, body)

  return res.json({message: `Registro de número ${id} alterado com sucesso`})
})

routes.delete('/ans/:id', async(req,res)=> {
  const id = req.params.id;

  await deleteRequest(id);

  return res.json({message: `Registro de número ${id} removido com sucesso`})
})

export default routes;
