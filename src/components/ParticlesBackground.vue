<template>
  <div id="particles-js" class="particles-background"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Importa a biblioteca particles.js dinamicamente
let particlesJS = null;

onMounted(async () => {
  // Garante que o particlesJS esteja disponível globalmente
  // para que a função particlesJS.load possa encontrá-lo.
  // Isso é um truque comum quando a biblioteca não é modular.
  await import('particles.js/particles');
  particlesJS = window.particlesJS;

  if (particlesJS) {
    particlesJS.load('particles-js', '/particles.json', function() {
      console.log('particles.js loaded - callback');
    });
  } else {
    console.error('particles.js not found on window object.');
  }
});

onUnmounted(() => {
  // Limpa os particles.js ao sair da página para evitar vazamentos de memória
  if (window.pJSDom && window.pJSDom.length > 0) {
    window.pJSDom[0].pJS.fn.vendors.destroypJS();
    window.pJSDom = []; // Limpa a referência
  }
});
</script>

<style scoped>
.particles-background {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent; /* A cor de fundo principal virá do body/html */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1; /* Envia para trás do conteúdo */
  top: 0;
  left: 0;
}
</style>