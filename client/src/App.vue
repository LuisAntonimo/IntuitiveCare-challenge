<template>
  <v-app>
    <section>
      <Header />
    </section>
    <main>
      <section>
        <DataTable />
      </section>
    </main>
  </v-app>
</template>

<script>
import Header from './components/header/header.vue';
import DataTable from './components/dataTable/datatable.vue'

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Header,
    DataTable,
  }
};
</script>

<style>
  #app {
    background-color: #f1f1f1;
  }
</style>