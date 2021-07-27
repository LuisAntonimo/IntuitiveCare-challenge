import csvdb from 'csv-database';
import headers from './headers.js'



export default async function getRequest(params) {
  const database = await csvdb('./api/data/teste.csv', headers, ';');
  const result = await database.get(params);

  return result;
}
