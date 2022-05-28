<template>
  <div>
    <clientes-lista />
    <menu-lateral />
    <footer-absolute />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ClientesLista from '../components/listas/ClientesLista.vue'
  import FooterAbsolute from '../components/FooterAbsolute.vue'
  import MenuLateral from '../components/MenuLateral.vue'
  import Cookies from 'js-cookie';

  export default Vue.extend({
    name: 'Home',

        beforeCreate(){
      if(Cookies.get('user') == undefined){
         this.$router.push({path: '/'})
      }
    },

    components: {
      MenuLateral,
      ClientesLista,
      FooterAbsolute,
    },
  })
</script>
