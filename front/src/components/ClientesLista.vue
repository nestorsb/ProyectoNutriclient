<template>
  <div>
    <v-data-table
      :headers="headersClientes"
      :items="Clientes"
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
      <template v-slot:body>
        <tr>
          <td></td>
          <td></td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
<script lang="ts">
import axios from "axios";
import Cliente from "../assets/dtos/ClienteDto";

export default {
  name: "ClientesLista",
  data: () => ({
    search: "",
    calories: "",
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
      filterOnlyCapsText(value: { toString: () => string }, search: string) {
        return (
          value != null &&
          search != null &&
          typeof value === "string" &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
        );
      },
    },
  }),
  // created() {
  //   axios.get("http://localhost:9000/api/clientes/").then((res) => {
  //     console.log(res.data);
  //     res.data.forEach((cliente, index) => {
  //       let clientes: [];
  //       //@ts-ignore
  //       clientes[index] = cliente
  //       console.log(cliente);
  //     });
  //   });
  // },
};
</script>
