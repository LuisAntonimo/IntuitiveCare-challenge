import csvdb from 'csv-database';
import headers, { path } from './headers.js'



export default async function getRequest(params) {
  const database = await csvdb(path, headers, ';');
  const result = await database.get(params);

  return result;
}
