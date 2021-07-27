import csvdb from 'csv-database';
import headers, { path } from './headers.js'

export default async function postRequest(params) {
  const database = await csvdb(path, headers, ';');
  const result = await database.add(params);

  return result;
}
