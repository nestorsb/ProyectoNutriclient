<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="blue darken-4" dark>
      <v-list-item>
        <v-list-item-avatar>
          <img src="../assets/account-circle-outline.png" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="user">{{getUser()}}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" @click="$router.push(item.link)">
          <v-list-item-icon>
            <v-icon class="iconitemlista">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="tituloitemlista">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()"> Cerrar Sesion </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar class="blue accent-2" app dark>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import Vue from "vue";
import Cookies from 'js-cookie'


@Component
export default class MenuLateral extends Vue {
    public drawer: boolean = true;
    data() {
    return {
      items: [
        { title: "Clientes", icon: "mdi-account-box", link: "clientes"},
        { title: "Consultas", icon: "mdi-account-box", link: "consultas"},
      ],
    }
    }
      public toggleDrawer() {
        this.drawer = !this.drawer;
      }
      public logout(){
        Cookies.remove('user',{ path: '' })
        Cookies.remove('userId',{ path: '' })
        this.$router.push("/")
      }
      getUser(){
        return Cookies.get('user')
      }
    

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.user{
  font-size: 1.5em;
  padding-top: 5px; 
  padding-bottom: 5px; 
}
</style>
