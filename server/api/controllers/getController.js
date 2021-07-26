import csvdb from 'csv-database';

const headers = ['Registro ANS', 'CNPJ', 'Razão Social', 'Nome Fantasia', 'Modalidade', 'Logradouro', 'Número', 'Complemento', 'Bairro', 'Cidade', 'UF', 'CEP', 'DDD', 'Telefone', 'Fax', 'Endereço eletrônico', 'Representante', 'Cargo Representante', 'Data Registro ANS']

const database = await csvdb('teste.csv', headers, ';');


