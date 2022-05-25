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

  export default Vue.extend({
    name: 'consultas',

    components: {
      MenuLateral,
      ConsultasLista,
      FooterAbsolute,
    },
  })
</script>
