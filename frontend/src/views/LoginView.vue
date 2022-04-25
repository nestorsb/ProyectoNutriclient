<template>
   <v-app id="inspire">      
      <v-content class="blue lighten-4">
   <v-alert 
      type="warning"
      v-if="showAlert"
    >
      {{alertmsg}}
    </v-alert>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>NUTRICLIENT</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              v-model="usuario"
                              prepend-icon="mdi-account"
                              name="usuario"
                              label="Usuario"
                              type="text"
                           ></v-text-field>
                           <v-text-field
                              v-model="password"
                              prepend-icon="mdi-lock"
                              name="password"
                              label="Contraseña"
                              type="password"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="login()">Entrar</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-content>

   </v-app>
</template>

<script>
import axios from 'axios';
import Vue from 'vue'

export default Vue.extend({
   usuario: '',
   password: '',
   showAlert: false,
   alertmsg:'',
   props: {
   },
   methods: {
      
      login() {

         this.validateFormData();
         let json = {
            "Usuario": this.usuario, 
            "Contraseña": this.password
         }

         axios.post('http://localhost:9000/api/login/', {json}).then((res)=>{
            console.log(res);
         })
      },

      validateFormData() {
         if((this.usuario == '' || this.usuario == undefined) && (this.password == '' || this.password == undefined)) {
            this.alertmsg = 'Introduzca un Usuario y una Contraseña';
            this.showAlert = true
            console.log(this.showAlert);
         }else {
            if (this.usuario == '' || this.usuario == undefined) {
               this.alertmsg = 'Introduzca un Usuario';
               this.showAlert = true
            }else {
               if(this.password == '' || this.password == undefined){
               this.alertmsg = 'Introduzca una Contraseña';
               this.showAlert = true
               }
            }
         }
      }   
   }
});
</script>

<style>

</style>
