<template>
  <div>
    <consultas-lista />
    <menu-lateral />
    <footer-absolute />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ConsultasLista from '../components/listas/ConsultasLista.vue'
  import FooterAbsolute from '../components/FooterAbsolute.vue'
  import MenuLateral from '../components/MenuLateral.vue'
  import Cookies from 'js-cookie'

  export default Vue.extend({
    name: 'consultas',

        beforeCreate(){
      if(Cookies.get('user') == undefined){
         this.$router.push({path: '/'})
      }
    },

    components: {
      MenuLateral,
      ConsultasLista,
      FooterAbsolute,
    },
  })
</script>
