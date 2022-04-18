<template>
  <clientes-lista />
</template>

<script lang="ts">
import Vue from "vue";
import ClientesLista from "../components/ClientesLista.vue";

export default Vue.extend({
  name: "Home-view",

  components: {
    ClientesLista,
  },
});
</script>
