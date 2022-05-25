<template>
   <v-row justify="center">
      <v-dialog
         v-model="ShowDialog"
         persistent
         scrollable
         max-width="1200px"
         >
         <v-card>
            <v-card-title>
               <span class="text-h5">Perfil de Cliente</span>
            </v-card-title>
            <v-card-text>
               <v-container>
                  <v-row>
                     <v-col cols="12"
                     class="blue lighten-5">
                       <h3 class=" text-center" >Datos Personales</h3>
                      </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        >
                        <v-text-field
                          v-model="Nombre"
                           label="Nombre*"
                           required
                           :rules="[rules.max30]"
                           ></v-text-field>
                     </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="6"
                        >
                        <v-text-field
                           v-model="Apellidos"
                           label="Apellidos*"
                           :rules="[rules.max60]"
                           required
                           ></v-text-field>
                     </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                        <v-select
                           v-model="Sexo"
                           :items="['Hombre', 'Mujer', 'Otro']"
                           label="Sexo*"
                           required
                           ></v-select>
                     </v-col>
                     
                     <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                        <v-dialog
                           ref="dialog"
                           v-model="modal"
                           :return-value.sync="date"
                           width="290px"
                           >
                           <template v-slot:activator="{ on, attrs }">
                              <v-text-field
                                 v-model="date"
                                 label="Fecha de Nacimiento*"
                                 prepend-icon="mdi-calendar"
                                 readonly
                                 required
                                 v-bind="attrs"
                                 v-on="on"
                                 ></v-text-field>
                           </template>
                           <v-date-picker
                              v-model="date"
                              scrollable
                              >
                              <v-spacer></v-spacer>
                              <v-btn
                                 text
                                 color="primary"
                                 @click="$refs.dialog.save(date)"
                                 >
                                 OK
                              </v-btn>
                           </v-date-picker>
                        </v-dialog>
                     </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                        <v-text-field
                            v-model="Nacionalidad"
                           label="Nacionalidad*"
                           required
                           persistent-hint
                           :rules="[rules.max20]"
                           ></v-text-field>
                     </v-col>
                     <v-col
                        cols="12"
                        sm="6"
                        md="4"
                        >
                        <v-text-field
                           v-model="Telefono"
                           label="Telefono*"
                           persistent-hint
                           required
                           :rules="[rules.phone]"
                           ></v-text-field>
                     </v-col>
                     <v-col 
                        cols="12"
                        sm="8"
                        md="8">
                        <v-text-field
                           v-model="Email"
                           label="Email*"
                           required
                           :rules="[rules.email]"
                           ></v-text-field>
                     </v-col>
                     <v-col 
                        cols="12"
                        sm="6"
                        md="3"
                        >
                        <v-text-field
                           v-model="Poblacion"
                           label="Poblacion"
                           :rules="[rules.max30]"
                           ></v-text-field>
                     </v-col>
                     <v-col 
                        cols="12"
                        sm="6"
                        md="3"
                        >
                        <v-text-field
                          v-model="Codigopostal"
                           label="CP"
                           :rules="[rules.cp]"
                           ></v-text-field>
                     </v-col>
                     <v-col 
                        cols="12"
                        sm="6"
                        md="6"
                        >
                        <v-text-field
                           v-model="Direccion"
                           label="Direccion"
                           :rules="[rules.max30]"
                           ></v-text-field>
                     </v-col>
                     <v-col cols="12"
                     class="blue lighten-5">
                       <h3 class="text-center" >Medicacion</h3>
                       </v-col>
                        <v-col
                           cols="12"
                           sm="2"
                           md="2"
                           >
                           <v-switch
                              v-model="Medicacion"
                              label="Medicación"
                            ></v-switch>
                        </v-col>
                        <v-col
                           cols="12"
                           sm="10"
                           md="10"
                           >
                           <v-container 
                           fluid
                           >
                              <v-textarea
                                 v-model="Descripcionmed" 
                                 clearable
                                 auto-grow
                                 counter
                                 dense
                                 clear-icon="mdi-close-circle"
                                 label="Descripcion de la Medicación"
                                 background-color="grey lighten-4"
                                 :rules="[rules.max500]"
                                 ></v-textarea>
                           </v-container>
                        </v-col>
                      <v-col cols="12"
                     class="blue lighten-5">
                       <h3 class="text-center" >Informacion Adicional</h3>
                       </v-col>
                      <v-col
                        cols="12"
                        sm="12"
                        md="12"
                        >
                        <v-select
                           v-model="Situacionlaboral"
                           :items="['Activo', 'Innactivo', 'Estudiante']"
                           label="Situacion Laboral*"
                           ></v-select>
                     </v-col>
                        <v-col
                           cols="12"
                           sm="12"
                           md="12"
                           >
                           <v-container 
                           fluid
                           >
                              <v-textarea
                                 v-model="Informacionadd"
                                 clearable
                                 auto-grow
                                 counter
                                 dense
                                 clear-icon="mdi-close-circle"
                                 label="Informacion Adicional"
                                 background-color="grey lighten-4"
                                 :rules="[rules.max1000]"
                                 ></v-textarea>
                           </v-container>
                        </v-col>

                  </v-row>
               </v-container>
               <small>*Indica que el campo es requerido</small>
            </v-card-text>
            <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn
                  v-if="!isNew"
                  style="background:red"
                  dark
                  text
                  >
                  Eliminar Cliente
               </v-btn>
               <v-btn
                  color="blue darken-1"
                  text
                  @click="ShowDialog = false"
                  >
                  Cerrar
               </v-btn>
               <v-btn
                  color="green darken-1"
                  text
                  @click="guardar()"
                  >
                  Guardar
               </v-btn>
            </v-card-actions>
         </v-card>
      </v-dialog>
   </v-row>
</template><script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import axios from 'axios';
import { Component, Prop, Watch } from 'vue-property-decorator';


@Component
  export default class ClientesForm extends Vue {
      vuetify = new Vuetify();
        el: '#app';
      @Prop({default: false}) public ShowDialog!: boolean;
      @Prop() public isNew!: boolean;

      //data picker
      public menu: boolean = false;
      public modal: false;
      public menu2: false;
      public date: any = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)

      //informacion del cliente
      public Id: number
      public Nombre: string
      public Apellidos: string
      public Sexo: string
      public Telefono: number
      public Email: string
      public Poblacion: string
      public Codigopostal: number
      public Direccion: string
      public Medicacion: boolean
      public Descripcionmed: string
      public Fechanac: Date
      public Informacionadd: string
      public Nacionalidad: string
      public Situacionlaboral: string
      public Niveleconomico: string
      public Fechacreacion: Date

      //Rules
      public rules:{} = {
        phone: (v: any) => /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(v) && v.length == 9 || "Introduzca un teléfono de 9 dígitos",
        email: (v: any) => /.+@.+\..+/.test(v) || "Introduzca un email válido",
        max5: (v: any) => v.length <= 5 || "Longitud máxima de 5 carácteres",
        max20: (v: any) => v.length <= 20 || "Longitud máxima de 20 carácteres",
        max30: (v: any) => v.length <= 30 || "Longitud máxima de 30 carácteres",
        max60: (v: any) => v.length <= 60 || "Longitud máxima de 60 carácteres",
        max320: (v: any) => v.length <= 320 || "Longitud máxima de 320 carácteres",
        max500: (v: any) => v.length <= 500 || "Longitud máxima de 500 carácteres",
        max1000: (v: any) => v.length <= 1000 || "Longitud máxima de 1000 carácteres",
        cp: (v: any) => /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(v) || "Debe de Introducir un Codigo Postal válido"
      }
      

      mounted(){
        console.log(this.Nombre)
      }

      closeDialog(){
        this.$emit('closeDialog');
      }

      @Watch("ShowDialog")
      public startEditing(){
        if(this.ShowDialog == false){
          this.closeDialog();
        }
      }

      guardar(){
        if(this.isNew){
          this.Id = 0
        }
        let Obj = {
          "Id": this.Id,
          "Nombre": this.Nombre,
          "Apellidos": this.Apellidos,
          "Sexo": this.Sexo,
          "Telefono": this.Telefono,
          "Email": this.Email,
          "Poblacion": this.Poblacion,
          "Codigopostal": this.Codigopostal,
          "Direccion": this.Direccion,
          "Medicacion": this.Medicacion,
          "Descripcionmed": this.Descripcionmed,
          "Fechanac": this.date,
          "Informacionadd": this.Informacionadd,
          "Nacionalidad": this.Nacionalidad,
          "Situacionlaboral": this.Situacionlaboral,
          "Fechacreacion": new Date()
        } 

        if(this.isNew){
          axios.post('http://localhost:9000/api/nuevocliente/', Obj).then((res)=>{
            if(res.data[0]){
              this.closeDialog()
            }
          })

        }else if(!this.isNew){
          axios.put('http://localhost:9000/api/modificarcliente/' + Obj.Id, Obj).then((res)=>{
            if(res.data[0]){
              this.closeDialog()
            }
          })
        }
      }
  }
</script>