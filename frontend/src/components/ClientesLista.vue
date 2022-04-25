
<template>
<div>
  <v-card>
    <v-card-title id="tabletitle" class="blue lighten-5">
      Clientes
    </v-card-title>
    <v-divider></v-divider>
    <v-card-subtitle> 
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-subtitle>
    <v-data-table
      :headers="headers"
      :items="clientes"
      :search="search"
    ></v-data-table>
  </v-card>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import Cliente from "../../../front/src/assets/dtos/ClienteDto";
// import axios from "axios";

@Component
export default class ClientesLista extends Vue {
  created(){
  }

  data () {
    return {
      search: '',
      headers: [
          {
          text: "Nombre",
          align: "start",
          value: "Nombre",
        },
        {
          text: "Apellidos",
          align: "start",
          filterable: false,
          value: "Apellidos",
        },
        {
          text: "Telefono",
          align: "start",
          filterable: false,
          value: "Telefono",
        },
        {
          text: "Email",
          align: "start",
          filterable: false,
          value: "Email",
        },
        {
          text: "Poblacion",
          align: "start",
          filterable: false,
          value: "Poblacion",
        },
        {
          text: "Codigopostal",
          align: "start",
          filterable: false,
          value: "Codigopostal",
        },
        {
          text: "Direccion",
          align: "start",
          filterable: false,
          value: "Direccion",
        },
        {
          text: "NumConsultas",
          align: "start",
          filterable: false,
          value: "NumConsultas",
        },
        {
          text: "Idenfermedad",
          align: "start",
          filterable: false,
          value: "Idenfermedad",
        },
        {
          text: "Medicacion",
          align: "start",
          filterable: false,
          value: "Medicacion",
        },
        {
          text: "Descripcionmed",
          align: "start",
          filterable: false,
          value: "Descripcionmed",
        },
        {
          text: "Fechanac",
          align: "start",
          filterable: false,
          value: "Fechanac",
        },
        {
          text: "Informacionadd",
          align: "start",
          filterable: false,
          value: "Informacionadd",
        },
        {
          text: "Nacionalidad",
          align: "start",
          filterable: false,
          value: "Nacionalidad",
        },
        {
          text: "Situacionlaboral",
          align: "start",
          filterable: false,
          value: "Situacionlaboral",
        },
        {
          text: "Niveleconomico",
          align: "start",
          filterable: false,
          value: "Niveleconomico",
        },
        {
          text: "Fechacreacion",
          align: "start",
          filterable: false,
          value: "Fechacreacion",
        },
      ],
      clientes: [
         this.getClientes()
      ] 
    }
  }

    headersclientes() {
      return [
        {
          text: "Nombre",
          align: "start",
          value: "Nombre",
        },
        {
          text: "Apellidos",
          align: "start",
          filterable: false,
          value: "Apellidos",
        },
        {
          text: "Telefono",
          align: "start",
          filterable: false,
          value: "Telefono",
        },
        {
          text: "Email",
          align: "start",
          filterable: false,
          value: "Email",
        },
        {
          text: "Poblacion",
          align: "start",
          filterable: false,
          value: "Poblacion",
        },
        {
          text: "Codigopostal",
          align: "start",
          filterable: false,
          value: "Codigopostal",
        },
        {
          text: "Direccion",
          align: "start",
          filterable: false,
          value: "Direccion",
        },
        {
          text: "NumConsultas",
          align: "start",
          filterable: false,
          value: "NumConsultas",
        },
        {
          text: "Idenfermedad",
          align: "start",
          filterable: false,
          value: "Idenfermedad",
        },
        {
          text: "Medicacion",
          align: "start",
          filterable: false,
          value: "Medicacion",
        },
        {
          text: "Descripcionmed",
          align: "start",
          filterable: false,
          value: "Descripcionmed",
        },
        {
          text: "Fechanac",
          align: "start",
          filterable: false,
          value: "Fechanac",
        },
        {
          text: "Informacionadd",
          align: "start",
          filterable: false,
          value: "Informacionadd",
        },
        {
          text: "Nacionalidad",
          align: "start",
          filterable: false,
          value: "Nacionalidad",
        },
        {
          text: "Situacionlaboral",
          align: "start",
          filterable: false,
          value: "Situacionlaboral",
        },
        {
          text: "Niveleconomico",
          align: "start",
          filterable: false,
          value: "Niveleconomico",
        },
        {
          text: "Fechacreacion",
          align: "start",
          filterable: false,
          value: "Fechacreacion",
        },
      ];
    }      
    getClientes() {
      let clientes =
        {
          Nombre: "Nest",
          Apellidos: "San",
          Sexo: "hombre",
          Telefono: 123456789,
          Email: "string",
          Poblacion: "string",
          Codigopostal: 46035,
          Direccion: "string",
          NumConsultas: 10,
          Idenfermedad: 10,
          Medicacion: 12,
          Descripcionmed: "string",
          Fechanac: new Date(),
          Informacionadd: "string",
          Nacionalidad: "string",
          Situacionlaboral: "string",
          Niveleconomico: "string",
          Fechacreacion: new Date(),
        }
      return clientes;
    }
};
</script>
<style scoped>
#tabletitle{
  font-size: 1.8em;
  font-family: 'Sora', sans-serif;;
}
</style>

