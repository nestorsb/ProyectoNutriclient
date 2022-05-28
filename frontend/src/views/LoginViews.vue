<template>
    <div>
        <v-app >
        <div class="divlogo">
            <img src="../assets/logoNutriclient.svg" alt="Logo" >
        </div>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-alert
                v-show="alerts.loginIncorrecto"
                type="warning"
                prominent
                dismissible
                tile
                border="left"
                class="alertAbsolute"
                >
                Usuario o Contraseña Incorrectos 
                </v-alert>
                <v-alert
                v-show="alerts.registerError"
                type="warning"
                prominent
                dismissible
                tile
                border="left"
                class="alertAbsolute"
                >
                Error en la insercion, inténtelo de nuevo o pruebe con otro nombre de usuario. 
                </v-alert>
                <v-alert
                v-show="alerts.registerCorrect"
                type="succes"
                prominent
                dismissible
                tile
                border="left"
                class="alertAbsolute"
                >
                ¡Registro Correcto! 
                </v-alert>
                <v-tabs v-model="tab" show-arrows background-color="blue accent-4" icons-and-text dark grow>
                    <v-tabs-slider color="blue darken-4"></v-tabs-slider>
                    <v-tab v-for="i in tabs" :key="i">
                        <v-icon large>{{ i.icon }}</v-icon>
                        <div class="caption py-1">{{ i.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="loginForm" v-model="valid" lazy-validation  >
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginUser" :rules="UserRules" label="Usuario"  required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Contraseña" hint="Minimo 8 carácteres" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                                            <v-btn x-large block :disabled="!valid" class="blue accent-3 elevation-5" @click="login"> <font color="white">Entrar</font> </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="firstName" :rules="[rules.required]" label="Nombre" maxlength="30" append-icon="mdi-book-open" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="lastName" :rules="[rules.required]" label="Apellidos" maxlength="60" append-icon="mdi-book-open-outline" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="phoneNumber" :rules="[rules.phone]" label="Número de Teléfono" maxlength="60" append-icon="mdi-phone" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" append-icon="mdi-email" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="User" :rules="UserRules" label="Usuario" append-icon="mdi-account" required></v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="Minimo 8 carácteres" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col cols="6">
                                            <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex ml-auto" cols="12" sm="4" xsm="12">
                                            <v-btn x-large block :disabled="!valid" color="yellow accent-3 elevation-5" @click="register">Registrarse</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-dialog>
    </v-app>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import Vuetify from 'vuetify';
import { mapState } from "vuex";
import Cookies from 'js-cookie'
// import UsuarioModule from '../Modules/UsuarioModule'

//crypting info
const saltRounds = 10;

export default Vue.extend({
    vuetify: new Vuetify(),

    
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
     login() {
        if(this.$refs.loginForm !== undefined){
            console.log(this.$refs.loginForm)
            if ((this.$refs.loginForm as HTMLFormElement).validate()) {
                let json = {
                    "Usuario" : this.loginUser,
                    "Contraseña": this.loginPassword 
                }
                 axios.post('http://localhost:9000/api/login/', json).then((res) => {
                    if(res.data[0]){
                        console.log(res.data);
                        if(res.data.length > 0){
                    //coockies
                        Cookies.set('user', json.Usuario, {expires: 1});
                        Cookies.set('userId', res.data[0].Id, {expires: 1});

                        this.$router.push({path: 'clientes'})
                            }
                    }else{
                        this.alerts.loginIncorrecto = true
                        setTimeout(()=>{
                            this.alerts.loginIncorrecto = false
                            }, 5000)
                    }
                })
            }     
      }
    },

    register(){
        console.log((this.$refs.loginForm as HTMLFormElement).validate());
            // if((this.$refs.loginForm as HTMLFormElement).validate()) {
                let json = {
                    "Nombre" : this.firstName,
                    "Apellidos" : this.lastName,
                    "Usuario" : this.User,
                    "Contraseña" : this.password,
                    "Activo" : 1,
                    "Telefono" : this.phoneNumber,
                    "Email" : this.email,
                }
                console.log(json);
                axios.post('http://localhost:9000/api/register/', json).then((res) => {
                    console.log(res)
                        if(res.data.insertId){
                            this.alerts.registerCorrect = true,
                            setTimeout(()=>{
                            this.alerts.registerCorrect = false
                            }, 5000)
                        }else{
                            this.alerts.registerError = true,
                            (this.$refs.loginForm as HTMLFormElement).reset()
                            setTimeout(()=>{
                            this.alerts.registerError = false
                            }, 5000)
                        }
                })
            // }.
    },


    reset() {
        if (this.$refs.form !== undefined){
            (this.$refs.form as HTMLFormElement).reset();
        }
    },
    resetValidation() {
        if (this.$refs.form !== undefined){
            (this.$refs.form as HTMLFormElement).resetValidation();
        }
    },
    // logout(){
    //     this.$login = false;
    // }
  
  },
//   watch: {
//       $login(){
//           alert("2");
//           if(this.$login == true){
//               this.$router.push('home');
//           }else {
//               this.$router.push('login');
//           }
//       }
//   },
  data: () => ({
    isMounted: false,
    dialog: true,
    tab: 0,
    tabs: [
        {name:"Entrar", icon:"mdi-account"},
        {name:"Registrarse", icon:"mdi-account-outline"}
    ],
    valid: true,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    User:"",
    password: "",
    verify: "",
    loginPassword: "",
    loginUser: "",
    UserRules: [
      (v: any) => !!v || "Requerido",
    ],
    emailRules: [
      (v: any) => !!v || "Requerido",
      (v: any) => /.+@.+\..+/.test(v) || "Introduzca un email válido"
    ],
    alerts: {
        loginIncorrecto: false,
        registerError: false,
        registerCorrect: false
    },
    show1: false,
    rules: {
      required: (value: any) => !!value || "Requerido",
      min: (v: any) => (v && v.length >= 8) || "Minimo 8 carácteres",
      phone: (v: any) => /(\+34|0034|34)?[ -]*(6|7)[ -]*([0-9][ -]*){8}/.test(v) && v.length == 9 || "Introduzca un teléfono de 9 dígitos"
    }
  })
});

</script>
<style>
.alertAbsolute{
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    width: 600px;
    top: 20%;
}
.divlogo{
    min-width: 150px;
    width: 18%;
    margin-top: 1%;
    margin-left: 43%;
    margin-right: 43%;
        
}

</style>