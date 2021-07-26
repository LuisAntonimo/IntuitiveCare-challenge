import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Teste')
});

export default routes