<template>
  <div>
    <clientes-lista />
    <menu-lateral />
    <footer-absolute />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import ClientesLista from '../components/ClientesLista.vue'
  import FooterAbsolute from '../components/FooterAbsolute.vue'
  import HelloWorld from '../components/HelloWorld.vue'
  import MenuLateral from '../components/MenuLateral.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      HelloWorld,
      MenuLateral,
      ClientesLista,
      FooterAbsolute,
    },
  })
</script>
