<template>
   <v-row justify="center">
      <v-dialog
         v-model="ShowDialog"
         persistent
         scrollable
         max-width="1200px"
         >
         <v-form ref="form" lazy-validation>
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
                           :rules="[rules.required,rules.max30]"
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
                           :rules="[rules.required,rules.max60]"
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
                           menu-props="auto"
                           hide-details
                           single-line
                           required
                           :rules="[rules.required]"
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
                                 v-model="Fechanac"
                                 label="Fecha de Nacimiento*"
                                 prepend-icon="mdi-calendar"
                                 readonly
                                 required
                                 v-bind="attrs"
                                 v-on="on"
                                 ></v-text-field>
                           </template>
                           <v-date-picker
                              v-model="Fechanac"
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
                           :rules="[rules.required,rules.max20]"
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
                           :rules="[rules.required,rules.phone]"
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
                           :rules="[rules.required,rules.email]"
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
                           required
                           menu-props="auto"
                           hide-details
                           single-line
                           :rules="[rules.required]"
                           :items="['Activo', 'Innactivo', 'Estudiante', 'Jubilado']"
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
                  @click="confirmDialog = true"
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
         </v-form>
      </v-dialog>
   <v-dialog
    v-model="confirmDialog"
    max-width="400px"
    style= "zIndex: 200"
  >
    <v-card>
      <v-toolbar dark color="blue lighten-4" dense flat>
        <v-toolbar-title class="text-body-2 black--text">
          ¿Estas seguro que desea eliminar este registro?
        </v-toolbar-title>
      </v-toolbar>
      <v-card-actions class="pt-3">
        <v-spacer></v-spacer>
        <v-btn
          color="blue"
          text
          class="body-2 font-weight-bold"
          @click="confirmDialog = false"
          >Cancelar</v-btn
        >
        <v-btn
                  style="background:red"
                  dark
          outlined
          @click="eliminar()"
          >Eliminar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
   </v-row>
</template><script lang="ts">
import Vue from "vue";
import Vuetify from "vuetify";
import axios from 'axios';
import { Component, Prop, Watch } from 'vue-property-decorator';
import Cliente from '../../assets/Dtos/ClienteDto'
import moment from 'moment'


@Component
  export default class ClientesForm extends Vue {
      vuetify = new Vuetify();
      @Prop({default: false}) public ShowDialog!: boolean;
      @Prop() public isNew!: boolean;
      @Prop({default: undefined}) public ClienteSeleccionado!: Cliente;
      
      //confirm dialog
      public confirmDialog: boolean = false;
      public options: {
        color: "grey lighten-3",
        width: 400,
        zIndex: 200,
        noconfirm: false
      }

      //data picker
      public menu: boolean = false;
      public modal!: false;
      public menu2!: false;
      public date: any = (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)

      //informacion del cliente
      public Id!: number
      public Nombre!: string
      public Apellidos!: string
      public Sexo!: string
      public Telefono!: number
      public Email!: string
      public Poblacion!: string
      public Codigopostal!: number
      public Direccion!: string
      public Medicacion!: boolean | number;
      public Descripcionmed!: string
      public Fechanac!: Date | string
      public Informacionadd!: string
      public Nacionalidad!: string
      public Situacionlaboral!: string
      public Niveleconomico!: string
      public Fechacreacion!: Date | string

      //Rules
      public rules:{} = {
         required: (value: any) => !!value || "Requerido",
        phone: (v: any) => v ? /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(v) : null && v ? v.length == 9 : null || "Introduzca un teléfono de 9 dígitos",
        email: (v: any) => v ? /.+@.+\..+/.test(v) : null || "Introduzca un email válido",
        max5: (v: any) => v ? v.length <= 5 : true || "Longitud máxima de 5 carácteres",
        max20: (v: any) => v ? v.length <= 20 : true || "Longitud máxima de 20 carácteres",
        max30: (v: any) => v ? v.length <= 30 : true|| "Longitud máxima de 30 carácteres",
        max60: (v: any) => v ? v.length <= 60 : true|| "Longitud máxima de 60 carácteres",
        max320: (v: any) => v ? v.length <= 320 : true|| "Longitud máxima de 320 carácteres",
        max500: (v: any) => v ? v.length <= 500 : true || "Longitud máxima de 500 carácteres",
        max1000: (v: any) => v ? v.length <= 1000 : true || "Longitud máxima de 1000 carácteres",
        cp: (v: any) => v ? /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/.test(v) : null || "Debe de Introducir un Codigo Postal válido"
      }
      


      public closeDialog(alertType?: number){
        alertType 
         ? this.$emit('closeDialog', alertType)
         : this.$emit('closeDialog')
      }

      closeConfirmDialog(){
         this.confirmDialog = false;
      }

      @Watch("ClienteSeleccionado")
      public reformat(){
         if(this.ClienteSeleccionado.Id)
         this.reformatSomeInputs(true)
      }

      @Watch("ShowDialog")
      public startEditing(){
        if(this.ShowDialog == false){
          this.closeDialog();
        }else{
           this.reformatSomeInputs(true)
        }


        if(!this.isNew){
           this.Id = this.ClienteSeleccionado.Id
           this.Nombre = this.ClienteSeleccionado.Nombre
           this.Apellidos = this.ClienteSeleccionado.Apellidos
           this.Sexo = this.ClienteSeleccionado.Sexo
           this.Telefono = this.ClienteSeleccionado.Telefono
           this.Email = this.ClienteSeleccionado.Email
           this.Poblacion = this.ClienteSeleccionado.Poblacion
           this.Codigopostal = this.ClienteSeleccionado.Codigopostal
           this.Direccion = this.ClienteSeleccionado.Direccion
           this.Medicacion = this.ClienteSeleccionado.Medicacion
           this.Descripcionmed = this.ClienteSeleccionado.Descripcionmed
           this.Fechanac = this.ClienteSeleccionado.Fechanac
           this.Informacionadd = this.ClienteSeleccionado.Informacionadd
           this.Nacionalidad = this.ClienteSeleccionado.Nacionalidad
           this.Situacionlaboral = this.ClienteSeleccionado.Situacionlaboral
           this.Niveleconomico = this.ClienteSeleccionado.Niveleconomico
           this.Fechacreacion = this.ClienteSeleccionado.Fechacreacion
        }else{
            this.Id = null
            this.Nombre = null
            this.Apellidos = null
            this.Sexo = null
            this.Telefono = null
            this.Email = null
            this.Poblacion = null
            this.Codigopostal = null
            this.Direccion = null
            this.Medicacion = null
            this.Descripcionmed = null
            this.Fechanac = null
            this.Informacionadd = null
            this.Nacionalidad = null
            this.Situacionlaboral = null
            this.Niveleconomico = null
            this.Fechacreacion = null

        }
      }

      public reformatSomeInputs(recieving: boolean){
         if(recieving){
            if (this.Sexo){
               switch(this.Sexo){
                  case 'H':
                     this.Sexo = 'Hombre'
                     break;
                  case 'M':
                     this.Sexo = 'Mujer'
                     break;
                  case 'O':
                     this.Sexo = 'Otro'
                     break;
               }
            }

            if (this.Medicacion != null && this.Medicacion != undefined){
               switch(this.Medicacion){
                  case 1:
                     this.Medicacion = true
                     break;               
                  case 0:
                     this.Medicacion = false
                     break;
               }
            }

         }else{
            if (this.Sexo){
               switch(this.Sexo){
                  case 'Hombre':
                     this.Sexo = 'H'
                     break;
                  case 'Mujer':
                     this.Sexo = 'M'
                     break;
                  case 'Otro':
                     this.Sexo = 'O'
                     break;
               }
            }

            if (this.Medicacion){
               switch(this.Medicacion){
                  case true:
                     this.Medicacion = 1
                     break;               
                  case false:
                     this.Medicacion = 0
                     break;
               }
            }
         }
      }

      async eliminar(){
         await axios.delete("http://localhost:9000/api/deleteCliente/" + this.Id).then((res)=>{
            if(res.data == "Cliente borrado!"){
               this.closeConfirmDialog();
               this.closeDialog(5);
            }else{
               this.closeConfirmDialog();
               this.closeDialog(6);
            }
            
         })
      }

      guardar(){
        if((this.$refs.form as HTMLFormElement).validate()){

         if(this.isNew){
              this.Id = 0
        }

        this.reformatSomeInputs(false)
        
        let Obj = {
           "Id": this.Id,
          "Nombre": this.Nombre,
          "Apellidos": this.Apellidos,
          "Sexo": this.Sexo,
          "Telefono": this.Telefono,
          "Email": this.Email,
          "Poblacion": this.Poblacion ? this.Poblacion : null,
          "Codigopostal": this.Codigopostal ? this.Codigopostal : null,
          "Direccion": this.Direccion ? this.Direccion : null,
          "Medicacion": this.Medicacion ? this.Medicacion : null,
          "Descripcionmed": this.Descripcionmed ? this.Descripcionmed : false ,
          "Fechanac": this.date ? moment(this.date).format('DD/MM/YYYY') : null,
          "Informacionadd": this.Informacionadd ? this.Informacionadd : null,
          "Nacionalidad": this.Nacionalidad ? this.Nacionalidad : null,
          "Situacionlaboral": this.Situacionlaboral ? this.Situacionlaboral : null,
          "Fechacreacion": moment().format('DD/MM/YYYY hh:mm:ss')
        } 


        if(this.isNew){
           axios.post('http://localhost:9000/api/nuevoCliente/', Obj).then((res)=>{
              if(typeof res.data.insertId !== undefined){
                 this.closeDialog(1)
            }else{
               this.closeDialog(2)
               
            }
          })

        }else if(!this.isNew){
           axios.put('http://localhost:9000/api/modificarCliente/' + Obj.Id, Obj).then((res)=>{
              if(res.data == 'Cliente actualizado!'){
                 this.closeDialog(3)
            }else{
               this.closeDialog(4)
            }
          })
        }
        }
      }
  }
</script>