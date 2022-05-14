
<template>
<div>
  <v-card>
    <v-card-title id="tabletitle" class="blue lighten-5">
      Clientes
       <v-btn
          color="primary"
          fab
          dark
          small
          @click="createNew()"
        >
        <v-icon dark>
          mdi-plus
        </v-icon>
        </v-btn>
  <clientes-form 
  ref="clientesForm"
  :ShowDialog="ShowDialog"
  :isNew="isNew"
  :ClienteSeleccionado="ClienteSeleccionado"
  @closeDialog="closeDialog"
  />
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
      v-model="selected"
      :headers="headers"
      :items="clientes"
      item-key="Id"
      :search="search"
      class="elevation-0"
      @dblclick:row="editItem"
    ></v-data-table>
  </v-card>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mixins } from "vue-class-component";
import { Component, Ref } from 'vue-property-decorator';
import ClientesForm from  './forms/ClientesForm.vue'

@Component({
  components: {ClientesForm}
})
export default class ClientesLista extends mixins() {
      @Ref() clientesForm!: ClientesForm ;
      public headers!: any;
      public clientes!: any;
      public ShowDialog: boolean = false;
      public search: string = "";
      public selected:[] = [];
      public ClienteSeleccionado!: {};
      public isNew!: boolean;


  created(){
    this.headers = this.headersclientes();
    this.clientes = this.getClientes()
  }

  public createNew() {
    this.isNew = true
    this.ShowDialog = true
  }
  public closeDialog(){
      this.ShowDialog = false;
  }

  editItem (event: any, {item}: any) {
    this.isNew = false;
    this.ClienteSeleccionado = item;
    console.log(item)
    this.ShowDialog = true
}

    public headersclientes() {
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
    public getClientes() {
      let clientes = [
        {
          Id: 1,
          Nombre: "Nest",
          Apellidos: "San",
          Sexo: "hombre",
          Telefono: 123456789,
          Email: "string",
          Poblacion: "string",
          Codigopostal: 46035,
          Direccion: "string",
          NumConsultas: 10,
          Medicacion: 12,
          Descripcionmed: "string",
          Fechanac: new Date(),
          Informacionadd: "string",
          Nacionalidad: "string",
          Situacionlaboral: "string",
          Niveleconomico: "string",
          Fechacreacion: new Date(),
        },
        {
          Id: 2,
          Nombre: "cris",
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
      ]
      return clientes;
    }
};
</script>
<style scoped>


#tabletitle {
  font-size: 1.8em;
  font-family: 'Sora', sans-serif;;
}
</style>

