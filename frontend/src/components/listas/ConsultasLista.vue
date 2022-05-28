
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
                    Error al eliminar.
                    </v-alert>


  <v-card>
    <v-card-title id="tabletitle" class="blue lighten-5">
      Consultas
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
  <consultas-form 
  :key="formKey"
  ref="ConsultasForm"
  :ShowDialog="ShowDialog"
  :isNew="isNew"
  :ConsultaSeleccionada="ConsultaSeleccionada"
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
      ref="consultasLista"
      v-model="selected"
      :headers="headers"
      :items="consultas"
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
import Consulta from "../../assets/Dtos/ConsultasDto";
import ConsultasForm from  '../forms/ConsultasForm.vue';
import moment from 'moment';
import Cookies from 'js-cookie';

@Component({
  components: {ConsultasForm}
})
export default class ConsultasLista extends mixins() {
      @Ref() consultasForm!: ConsultasForm ;
      public headers!: any;
      public consultas!: Consulta[];
      public ShowDialog: boolean = false;
      public search: string = "";
      public selected:[] = [];
      public ConsultaSeleccionada!: {};
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
      this.headers = this.headersconsultas(); 
      axios.get('http://localhost:9000/api/consultas/').then((res)=>{
        if(res.data[0]){
          this.consultas = res.data
          // this.reformat(this.consultas);
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
      axios.get('http://localhost:9000/api/consultas/').then((res)=>{
        if(res.data[0]){
          this.consultas = res.data
          // this.reformat(this.consultas);
          this.$forceUpdate();
        }
      })
    }

    public editItem (event: any, {item}: any) {
      console.log(item)
      this.isNew = false;
      this.ConsultaSeleccionada = item;
      this.ShowDialog = true
    }

    // public reformat (c: Cliente[]){
    //   this.consultas.forEach(c => {
    //     if (c.Sexo){
    //           switch(c.Sexo){
    //             case 'H':
    //                 c.Sexo = 'Hombre'
    //                 break;
    //             case 'M':
    //                 c.Sexo = 'Mujer'
    //                 break;
    //             case 'O':
    //                 c.Sexo = 'Otro'
    //                 break;
    //           }
    //       }
    //       if (c.Medicacion != null && c.Medicacion != undefined){
    //           switch(c.Medicacion){
    //             case 1:
    //                 c.Medicacion = true
    //                 break;               
    //             case 0:
    //                 c.Medicacion = false
    //                 break;
    //           }
    //       }
    //   });
    // }

    public headersconsultas() {
      return [
        {
          text: "Id",
          align: " d-none",
          filterable:false,
          value: "Id",
        },
        {
          text: "Fecha",
          align: "start",
          value: "Fecha",
        },
        {
          text: "Pago",
          align: "start",
          value: "Pago",
        },
        {
          text: "Pago A Deber",
          align: " d-none",
          value: "Pagoadeber",
        },
        {
          text: "Especialista",
          align: " d-none",
          value: "Idespecialista",
        },
        {
          text: "Informe",
          align: " d-none",
          value: "Idcliente",
        },
        {
          text: "Informe",
          align: " d-none",
          value: "Idinforme",
        },
        {
          text: "Obervaciones",
          align: "start",
          value: "Observaciones",
        }
      ];
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

