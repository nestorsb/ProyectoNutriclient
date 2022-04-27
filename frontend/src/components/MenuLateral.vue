<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app class="blue darken-4" dark>
      <v-list-item two-line>
        <v-list-item-avatar>
          <img src="https://randomuser.me/api/portraits/women/81.jpg" />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Jane Smith</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" link>
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
          <v-btn block @click="logout()"> Logout </v-btn>
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

@Component
export default class MenuLateral extends Vue {
    public drawer: boolean = true;
    data() {
    return {
      items: [
        { title: "Clientes", icon: "mdi-account-box" },
        { title: "Consultas", icon: "mdi-account-box" },
        { title: "Calendario", icon: "mdi-gavel" },
      ],
    }
    }
      public toggleDrawer() {
        this.drawer = !this.drawer;
      }
      public logout(){
        this.$emit('logout');
      }

  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
