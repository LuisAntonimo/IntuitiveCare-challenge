import csvdb from 'csv-database';
import headers from './headers.js'



export default async function postRequest(params) {
  const database = await csvdb('./api/data/teste.csv', headers, ';');
  const result = await database.add(params);

  return result;
}
