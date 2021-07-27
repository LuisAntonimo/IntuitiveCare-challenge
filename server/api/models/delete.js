import csvdb from 'csv-database';
import headers, { path } from './headers.js'

export default async function deleteRequest(id) {
  const database = await csvdb(path, headers, ';');

  const result = await database.delete({'Registro ANS': `${id}`});

  return result;
}