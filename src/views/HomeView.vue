<script setup>
import FancyButton from '../components/FancyButton.vue';
// REMOVA ESTA LINHA: import ParticlesBackground from '../components/ParticlesBackground.vue';
</script>

<template>
  <main class="home-hero-section">
    <div class="name-container">
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
  /* min-height: 100vh; Este pode ser removido, pois o content-area já garante altura */
  text-align: center;
  width: 100%;
  position: relative;
}

.name-container {
  display: flex;
  gap: 20px;
  margin-bottom: 10px;
}

.first-name, .last-name {
  font-size: 5em;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -2px;
  color: var(--color-text-header);
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
  transition: color 0.3s ease;
}

.last-name {
  color: var(--color-primary);
}

.role-text {
  font-size: 1.8em;
  font-weight: 400;
  color: var(--color-text-soft);
  margin-bottom: 25px;
  position: relative;
  display: inline-block;
}

.cursor {
  font-weight: 300;
  animation: blink 0.7s infinite alternate;
  position: absolute;
  right: -15px;
  top: 0;
  color: var(--color-primary);
}

@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0; }
}

.status-button {
  font-size: 0.9em;
  padding: 5px 12px;
  border-radius: 20px;
  background-color: var(--color-background-soft);
  color: var(--color-text-soft);
  border: 1px solid var(--color-border);
  margin-bottom: 50px;
  pointer-events: none;
}

/* REMOVA TODAS AS REGRAS ABAIXO, POIS ELAS PERTENCEM À NAVEGAÇÃO QUE FOI MOVIDA PARA O App.vue */
/* .top-right-nav { ... } */
/* .top-nav-link { ... } */
/* .top-nav-link:hover { ... } */
/* E as media queries para .top-right-nav */
</style>