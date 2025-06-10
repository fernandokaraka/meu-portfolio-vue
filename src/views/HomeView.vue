<script setup>
import FancyButton from '../components/FancyButton.vue';
import ParticlesBackground from '../components/ParticlesBackground.vue'; // Adicionar import de volta
</script>

<template>
  <main class="home-hero-section">
    <ParticlesBackground /> <div class="name-container">
      <h1 class="first-name">Fernando</h1>
      <h1 class="last-name">Karakarian</h1>
    </div>
    <h2 class="role-text">Desenvolvedor Front-End<span class="cursor">|</span></h2>
    <FancyButton text="offline" type="text-only" class="status-button" />

    </main>
</template>

<style scoped>
.home-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  width: 100%;
  position: relative;
  /* background-color: transparent; O background será das partículas e do body */
}

/* IMPORTANTE: Assegure-se que o z-index do conteúdo principal é maior que o das partículas */
.name-container, .role-text, .status-button {
  position: relative; /* Para que o z-index funcione */
  z-index: 2; /* Um z-index maior que -1 das partículas */
}

/* ... (O restante do seu CSS da HomeView permanece o mesmo) ... */
</style>