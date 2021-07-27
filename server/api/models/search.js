import csvdb from 'csv-database';

const headers = [
  'Registro ANS',
  'CNPJ',
  'Razão Social',
  'Nome Fantasia',
  'Modalidade',
  'Logradouro',
  'Número',
  'Complemento',
  'Bairro',
  'Cidade',
  'UF',
  'CEP',
  'DDD',
  'Telefone',
  'Fax',
  'Endereço eletrônico',
  'Representante',
  'Cargo Representante',
  'Data Registro ANS',
];

export default async function getRequest(params) {
  const database = await csvdb('./api/data/teste.csv', headers, ';');
  const result = await database.get(params);

  return result;
}
