<script setup>
// Agora só precisamos importar o RouterView, que exibe suas páginas.
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-container">
    <RouterView />
  </div>
</template>

<style scoped>
/* Todos os estilos antigos para o header, logo e nav foram removidos.
  Deixamos apenas o essencial para o layout.
*/
.app-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  /* As linhas abaixo ajudam a centralizar o conteúdo da RouterView
     caso ele não ocupe todo o espaço. */
  justify-content: center;
  width: 100%;
}
</style>