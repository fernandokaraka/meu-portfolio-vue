<script setup>
import FancyButton from '../components/FancyButton.vue';
import ParticlesBackground from '../components/ParticlesBackground.vue'; // Importa o novo componente de partículas
</script>

<template>
  <main class="home-hero-section">
    <ParticlesBackground /> <div class="name-container">
      <h1 class="first-name">Ferrnando</h1>
      <h1 class="last-name">Karakanian</h1>
    </div>
    <h2 class="role-text">Desenvolvedor Front-End<span class="cursor">|</span></h2>
    <FancyButton text="offline" type="text-only" class="status-button" />

    <div class="top-right-nav">
      <router-link to="/sobre" class="top-nav-link">Sobre</router-link>
      <router-link to="/projetos" class="top-nav-link">Projetos</router-link>
      <router-link to="/contato" class="top-nav-link">Contato</router-link>
    </div>
  </main>
</template>

<style scoped>
/* Seu CSS aqui permanece o mesmo */
.home-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  width: 100%;
  position: relative;
  /* z-index: 1; Remova se houver, o z-index -1 do ParticlesBackground já o coloca para trás */
}

/* Resto do CSS da HomeView, incluindo responsividade */
/* ... */
</style>