import csvdb from 'csv-database';
import headers, { path } from './headers.js'

export default async function putRequest(id, params) {
  const database = await csvdb(path , headers, ';');

  const result = await database.edit({'Registro ANS': `${id}`}, params);

  return result;
}