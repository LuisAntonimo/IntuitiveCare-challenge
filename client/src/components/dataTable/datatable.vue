<template>
  <v-data-table
    class="ma-4 pa-2 elevation-1"
    dense
    :headers="headers"
    :items="ans"
    :search="search"
    :items-per-page="5"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title id="title"
          >Relação de operações ativas ANS</v-toolbar-title
        >
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="blue darken-2"
              fab
              dark
              class="mb-2"
              elevation="2"
              small
              v-bind="attrs"
              v-on="on"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col  v-for="(value, name) in editedItem" :key="name" cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem[name]" :label="name"> 
                    </v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="close()">
                Cancelar
              </v-btn>
              <v-btn color="blue darken-1" text @click="save()">
                Salvar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete()"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm()"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Deseja realmente deletar o registro?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"><strong>Cancelar</strong></v-btn>
              <v-btn color="red darken-1" text @click="deleteItemConfirm">Confirmar</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>

        <v-divider class="mx-4" inset vertical></v-divider>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisar"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>

    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="open"
      >
        Ir até o repositório
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        { text: 'Opções', value: 'actions', sortable: false },
        {
          text: 'Registro ANS',
          align: 'start',
          value: 'Registro ANS',
          align: 'center',
        },
        { text: 'CNPJ', value: 'CNPJ', align: 'center' },
        { text: 'Razão Social', value: 'Razão Social', align: 'center' },
        { text: 'Nome Fantasia', value: 'Nome Fantasia', align: 'center' },
        { text: 'Modalidade', value: 'Modalidade', align: 'center' },
        { text: 'Logradouro', value: 'Logradouro', align: 'center' },
        { text: 'Número', value: 'Número', align: 'center' },
        { text: 'Complemento', value: 'Complemento', align: 'center' },
        { text: 'Bairro', value: 'Bairro', align: 'center' },
        { text: 'Cidade', value: 'Cidade', align: 'center' },
        { text: 'UF', value: 'UF', align: 'center' },
        { text: 'CEP', value: 'CEP', align: 'center' },
        { text: 'DDD', value: 'DDD', align: 'center' },
        { text: 'Telefone', value: 'Telefone', align: 'center' },
        { text: 'Fax', value: 'Fax', align: 'center' },
        {
          text: 'Endereço eletrônico',
          value: 'Endereço eletrônico',
          align: 'center',
        },
        { text: 'Representante', value: 'Representante', align: 'center' },
        {
          text: 'Cargo Representante',
          value: 'Cargo Representante',
          align: 'center',
        },
        {
          text: 'Data Registro ANS',
          value: 'Data Registro ANS',
          align: 'center',
        },
      ],
      ans: [],
      editedIndex: -1,
      editedItem: {
        'Registro ANS': '',
        CNPJ: '',
        'Razão Social': '',
        'Nome Fantasia': '',
        Modalidade: '',
        Logradouro: '',
        Número: '',
        Complemento: '',
        Bairro: '',
        Cidade: '',
        UF: '',
        CEP: '',
        DDD: '',
        Telefone: '',
        Fax: '',
        'Endereço eletrônico': '',
        Representante: '',
        'Cargo Representante': '',
        'Data Registro ANS': '',
      },
      defaultItem: {
        'Registro ANS': '',
        CNPJ: '',
        'Razão Social': '',
        'Nome Fantasia': '',
        Modalidade: '',
        Logradouro: '',
        Número: '',
        Complemento: '',
        Bairro: '',
        Cidade: '',
        UF: '',
        CEP: '',
        DDD: '',
        Telefone: '',
        Fax: '',
        'Endereço eletrônico': '',
        Representante: '',
        'Cargo Representante': '',
        'Data Registro ANS': '',
      },
      teste: '',
    };
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Novo Registro' : 'Editar Registro';
    },
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      fetch(process.env.VUE_APP_ADRESS)
        .then((response) => response.json())
        .then((data) => (this.ans = data));
    },
    postData(data) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const init = {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify(data),
      };

      fetch(`${process.env.VUE_APP_ADRESS}create`, init).then(
        this.ans.push(data)
      );
    },
    updateData(newData, data){
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const init = {
        method: 'PUT',
        headers: myHeaders,
        body: JSON.stringify(newData),
      };

      fetch(`${process.env.VUE_APP_ADRESS}ans/${data["Registro ANS"]}`, init)
    },
    deleteData(data) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      const init = {
        method: 'DELETE',
        headers: myHeaders,
      };

      fetch(`${process.env.VUE_APP_ADRESS}ans/${data["Registro ANS"]}`, init)
    },
    editItem(item) {
      this.editedIndex = this.ans.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.ans.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.deleteData(this.ans[this.editedIndex])
      this.ans.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        const originalData = this.ans[this.editedIndex];

        this.updateData(this.editedItem, originalData)
        Object.assign(originalData, this.editedItem);
      } else {
        this.postData(this.editedItem)
        
      }
      this.close();
    },
    open() {
      window.open('https://github.com/LuisAntonimo/intuitiveCare_codeChallenge')
    }
  },
};
</script>

<style scoped>
#title {
  color: blue;
}
</style>
