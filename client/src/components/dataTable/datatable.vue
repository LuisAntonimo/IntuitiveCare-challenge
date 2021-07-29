<template>
  <v-data-table 
    class="ma-4 pa-2 elevation-1" 
    dense 
    :headers="headers" 
    :items="ans">    
  </v-data-table>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      headers: [
        {text: 'Registro ANS', align: 'start', sortable: false, value: 'Registro ANS', align: 'center', width: "1%"},
        {text: 'CNPJ', sortable: false, value: 'CNPJ', align: 'center'},
        {text: 'Razão Social', value: 'Razão Social', align: 'center'},
        {text: 'Nome Fantasia', value: 'Nome Fantasia', align: 'center'},
        {text: 'Modalidade', value: 'Modalidade', align: 'center'},
        {text: 'Logradouro', value: 'Logradouro', align: 'center'},
        {text: 'Número', value: 'Número', align: 'center'},
        {text: 'Complemento', value: 'Complemento', align: 'center'},
        {text: 'Bairro', value: 'Bairro', align: 'center'},
        {text: 'Cidade', value: 'Cidade', align: 'center'},
        {text: 'UF', value: '', align: 'center'},
        {text: 'CEP', value: 'CEP', align: 'center'},
        {text: 'DDD', value: 'DDD', align: 'center'},
        {text: 'Telefone', value: 'Telefone', align: 'center'},
        {text: 'Fax', value: 'Fax', align: 'center'},
        {text: 'Endereço eletrônico', value: 'Endereço eletrônico', align: 'center'},
        {text: 'Representante', value: 'Representante', align: 'center'},
        {text: 'Cargo Representante', value: 'Cargo Representante', align: 'center'},
        {text: 'Data Registro ANS', value: 'Data Registro ANS', align: 'center'},
        ],
        ans: [],
    }
  },
  created() {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => (this.ans = data))
  }
};
</script>
