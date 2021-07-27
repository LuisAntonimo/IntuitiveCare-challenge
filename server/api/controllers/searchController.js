import getRequest from '../models/search.js';

const params = {
  async cep(query) {
    const res = await getRequest({ CEP: `${query.cep}` });

    return res;
  },
  async cidade(query) {
    const res = await getRequest({ Cidade: `${query.cidade}` });

    return res;
  },
  async ddd(query) {
    const res = await getRequest({ DDD: `${query.ddd}` });

    return res;
  },
  async uf(query) {
    const res = await getRequest({ UF: `${query.uf}` });
    return res;
  },
};

export default params;
