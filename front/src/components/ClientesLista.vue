<template>
  <div>
    <v-data-table
      :headers="headersClientes"
      :items="clientes"
      item-key="Id"
      class="elevation-1"
      :search="search"
      :custom-filter="filterOnlyCapsText"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search (UPPER CASE ONLY)"
          class="mx-4"
        ></v-text-field>
      </template>
      <template v-slot:body.append>
        <tr>
          <td></td>
          <td>
            <v-text-field
              v-model="calories"
              type="number"
              label="Less than"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
export default {
  name: "Clientes-lista",
  data: () => ({
    search: "",
    calories: "",
    Clientes: [],
    computed: {
      headersClientes() {
        return [
          {
            text: "Nombre",
            align: "start",
            sortable: false,
            value: "Nombre",
          },
          {
            text: "Apellidos",
            align: "start",
            sortable: false,
            value: "Apellidos",
          },
          {
            text: "Telefono",
            align: "start",
            sortable: false,
            value: "Telefono",
          },
          {
            text: "Email",
            align: "start",
            sortable: false,
            value: "Email",
          },
          {
            text: "Poblacion",
            align: "start",
            sortable: false,
            value: "Poblacion",
          },
          {
            text: "Codigopostal",
            align: "start",
            sortable: false,
            value: "Codigopostal",
          },
          {
            text: "Direccion",
            align: "start",
            sortable: false,
            value: "Direccion",
          },
          {
            text: "NumConsultas",
            align: "start",
            sortable: false,
            value: "NumConsultas",
          },
          {
            text: "Idenfermedad",
            align: "start",
            sortable: false,
            value: "Idenfermedad",
          },
          {
            text: "Medicacion",
            align: "start",
            sortable: false,
            value: "Medicacion",
          },
          {
            text: "Descripcionmed",
            align: "start",
            sortable: false,
            value: "Descripcionmed",
          },
          {
            text: "Fechanac",
            align: "start",
            sortable: false,
            value: "Fechanac",
          },
          {
            text: "Informacionadd",
            align: "start",
            sortable: false,
            value: "Informacionadd",
          },
          {
            text: "Nacionalidad",
            align: "start",
            sortable: false,
            value: "Nacionalidad",
          },
          {
            text: "Situacionlaboral",
            align: "start",
            sortable: false,
            value: "Situacionlaboral",
          },
          {
            text: "Niveleconomico",
            align: "start",
            sortable: false,
            value: "Niveleconomico",
          },
          {
            text: "Fechacreacion",
            align: "start",
            sortable: false,
            value: "Fechacreacion",
          },
        ];
      },
    },
    methods: {
      filterOnlyCapsText(value, search, item) {
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      },
    },
  }),
};
</script>
