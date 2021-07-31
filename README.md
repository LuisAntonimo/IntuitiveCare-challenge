# IntuitiveCare Code Challenge
### Aplicação CRUD que puxa os dados de uma planilha .csv no servidor para o frontend. Feito com Vue.js e Node.js (14.x).

![](https://cdn.discordapp.com/attachments/206121386685497346/871122003917172746/unknown.png)

![](https://cdn.discordapp.com/attachments/206121386685497346/871122141855236137/unknown.png)
![](https://cdn.discordapp.com/attachments/206121386685497346/871122236034125854/unknown.png)
![](https://cdn.discordapp.com/attachments/206121386685497346/871122310302662667/unknown.png)
# ToDo List:
## Tarefas de código:
  - [x] Criar servidor com rota que realiza uma busca textual na lista de cadastro de operadoras (obtido na tarefa de prepação) e retorne as linhas que mais se assemelham;
  - Criar uma interface usando o framework Vue.js que permita a um usuário:
    - [x] Visualizar os dados do csv acima em uma tabela de dados (datagrid/datatable);
    - [x] Realizar a pesquisa textual para qualquer uma das colunas do csv;
    - [x] Criar novos cadastros de operadoras;
    - [x] Deletar um cadastro;
    - [x] Editar um cadastro existente.
 

 ## Observações:
  - [x] As operações listadas acima (CRUD) deverão ser persistidas no arquivo (ou seja, fechando a sessão do browser e o servidor, ao reinicializá-los o resultado deve refletir as operações de CRUD feitas).


# Como executar:

1. Clone o repositório para sua máquina (pelo menos o código fonte do servidor);
2. Instale as dependências do projeto;
3. Para iniciar o servidor execute `npm run start` na pasta server.
4. Para iniciar o Cliente (caso queira executar localmente) execute `npm run serve` na pasta client.