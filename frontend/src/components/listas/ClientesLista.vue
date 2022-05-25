
<template>
<div>
   <v-alert
                    v-model="alerts.GuardarCorrecto"
                    type="success"
                    shaped
                    prominent
                    class="alertAbsolute"
                    >
                    ¡Guardado Correctamente! 
                </v-alert>

                <v-alert
                    v-model="alerts.GuardarError"
                    type="warning"
                    prominent
                    shaped
                    border="left"
                    class="alertAbsolute"
                    >
                    Error al guardar.
                </v-alert>

                <v-alert
                    v-model="alerts.ModificarCorrecto"
                    type="success"
                    prominent
                    shaped
                    border="left"
                    class="alertAbsolute"
                    >
                    ¡Modificado Correctamente! 
                    </v-alert>

                 <v-alert
                    v-model="alerts.ModificarError"
                    type="warning"
                    prominent
                    shaped
                    border="left"
                    class="alertAbsolute"
                    >
                    Error al guardar la modificacion.
                    </v-alert>

                <v-alert
                    v-model="alerts.EliminarCorrecto"
                    type="success"
                    prominent
                    shaped
                    border="left"
                    class="alertAbsolute"
                    >
                    ¡Eliminado Correctamente! 
                    </v-alert>

                 <v-alert
                    v-model="alerts.EliminarError"
                    type="warning"
                    prominent
                    shaped
                    border="left"
                    class="alertAbsolute"
                    >
                    Error al eliminar la modificacion.
                    </v-alert>


  <v-card>
    <v-card-title id="tabletitle" class="blue lighten-5">
      Clientes
       <v-btn
          style="margin-left:1em"
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
  :key="formKey"
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
      ref="clientesLista"
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
import axios from "axios";
import Vue from "vue";
import { mixins } from "vue-class-component";
import { Component, Ref } from 'vue-property-decorator';
import Cliente from "../../assets/Dtos/ClienteDto";
import ClientesForm from  '../forms/ClientesForm.vue'
import moment from 'moment'

@Component({
  components: {ClientesForm}
})
export default class ClientesLista extends mixins() {
      @Ref() clientesForm!: ClientesForm ;
      public headers!: any;
      public clientes!: Cliente[];
      public ShowDialog: boolean = false;
      public search: string = "";
      public selected:[] = [];
      public ClienteSeleccionado!: {};
      public isNew!: boolean;
      public formKey: number = 0
      public listKey: number = 0

            //Alerts
         public alerts: {
        GuardarCorrecto: boolean,
        GuardarError: boolean,
        ModificarCorrecto: boolean,
        ModificarError: boolean
        EliminarCorrecto: boolean,
        EliminarError: boolean,
    } = {
        GuardarCorrecto: false,
        GuardarError: false,
        ModificarCorrecto: false,
        ModificarError: false, 
        EliminarCorrecto: false,
        EliminarError: false,
    }



    async created(){  
      this.headers = this.headersclientes(); 
      axios.get('http://localhost:9000/api/clientes/').then((res)=>{
        if(res.data[0]){
          this.clientes = res.data
          this.reformat(this.clientes);
          this.$forceUpdate()
        }
          });  
    }

    public createNew() {
      this.isNew = true
      this.formKey += 1
      this.ShowDialog = true
    }
    public closeDialog(alertType?: number){
      this.update();
      this.ShowDialog = false;
      

      switch (alertType){
            case 1:
                this.alerts.GuardarCorrecto = true
                setTimeout(()=>{
                  this.alerts.GuardarCorrecto = false
                }, 4000)                  
                break;
            case 2:
                this.alerts.GuardarError = true
                setTimeout(()=>{
                  this.alerts.GuardarError = false
                }, 4000)  
               break;
            case 3:
                this.alerts.ModificarCorrecto = true
                  setTimeout(()=>{
                    this.alerts.ModificarCorrecto = false
                  }, 4000)
               break;
            case 4:
                this.alerts.ModificarError = true
                  setTimeout(()=>{
                    this.alerts.ModificarError = false
                  }, 4000)     
               break;
            case 5:
                this.alerts.EliminarCorrecto = true
                setTimeout(()=>{
                  this.alerts.EliminarCorrecto = false
                }, 4000) 
               break;
            case 6:
                this.alerts.EliminarError = true
                setTimeout(()=>{
                  this.alerts.EliminarError = false
                }, 4000) 
               break;
      }
    }

    public update(){
      axios.get('http://localhost:9000/api/clientes/').then((res)=>{
        if(res.data[0]){
          this.clientes = res.data
          this.reformat(this.clientes);
          this.$forceUpdate();
        }
      })
    }

    public editItem (event: any, {item}: any) {
      this.isNew = false;
      this.ClienteSeleccionado = item;
      this.ShowDialog = true
    }

    public reformat (c: Cliente[]){
      this.clientes.forEach(c => {
        if (c.Sexo){
              switch(c.Sexo){
                case 'H':
                    c.Sexo = 'Hombre'
                    break;
                case 'M':
                    c.Sexo = 'Mujer'
                    break;
                case 'O':
                    c.Sexo = 'Otro'
                    break;
              }
          }
          if (c.Medicacion != null && c.Medicacion != undefined){
              switch(c.Medicacion){
                case 1:
                    c.Medicacion = true
                    break;               
                case 0:
                    c.Medicacion = false
                    break;
              }
          }
      });
    }

    public headersclientes() {
      return [
        {
          text: "Id",
          align: " d-none",
          filterable:false,
          value: "Id",
          IsVisible: false,
        },
        {
          text: "Nombre",
          align: "start",
          value: "Nombre",
        },
        {
          text: "Apellidos",
          align: "start",
          value: "Apellidos",
        },
        {
          text: "Telefono",
          align: " d-none",
          value: "Telefono",
        },
        {
          text: "Email",
          align: "start",
          value: "Email",
        },
        {
          text: "Poblacion",
          align: "start",
          filterable: false,
          value: "Poblacion",
        },
        {
          text: "Codigo Postal",
          align: "start",
          filterable: false,
          value: "Codigopostal",
        },
        {
          text: "Dirección",
          align: " d-none",
          filterable: false,
          value: "Direccion",
        },
        {
          text: "Numero de Consultas",
          align: " d-none",
          filterable: false,
          value: "NumConsultas",
        },
        {
          text: "Medicacion",
          align: " d-none",
          filterable: false,
          value: "Medicacion",
        },
        {
          text: "Descripcion Médica",
          align: " d-none",
          filterable: false,
          value: "Descripcionmed",
        },
        {
          text: "Fecha Nacimiento",
          align: "start",
          filterable: false,
          value: "Fechanac",
        },
        {
          text: "Informacion Adiconal",
          align: " d-none",
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
          text: "Situacion Laboral",
          align: "start",
          filterable: false,
          value: "Situacionlaboral",
        },
        {
          text: "Fecha Creacion",
          align: "start",
          filterable: false,
          value: "Fechacreacion",
        },
      ];
    }
    

    public showAlertGC(){
      
    }
    public showAlertGE(){  

    }
    public showAlertMC(){
      alert(1)

    }
    public showAlertME(){
 
    }
    public showAlertEC(){
    
    }
    public showAlertEE(){
   
    }

};
</script>
<style scoped>


#tabletitle {
  font-size: 1.8em;
  font-family: 'Sora', sans-serif;;
}

.alertAbsolute{
    position: absolute;
    z-index: 300;
    margin-left: auto;
    margin-right: auto;
    width: 350px;
    top: 1%;
    left: 35%;
}
</style>

