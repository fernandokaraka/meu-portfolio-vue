<script setup>
import FancyButton from '../components/FancyButton.vue';
import ParticlesBackground from '../components/ParticlesBackground.vue';
</script>

<template>
  <main class="home-hero-section">
    <ParticlesBackground />

    <div class="name-container">
      <h1 class="first-name">Fernando</h1>
      <h1 class="last-name">Karakanian</h1>
    </div>
    <h2 class="role-text">Desenvolvedor Front-End<span class="cursor">|</span></h2>
  </main>
</template>

<style scoped>
.home-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* Altura mínima para desktop. Ajusta para caber na tela - altura do header e footer */
  min-height: calc(100vh - 70px - 90px); /* 100vh - padding-top do content-area (70px) - altura aproximada do footer (90px) */
  text-align: center;
  width: 100%;
  position: relative;
  z-index: 1; /* Garante que o conteúdo da Home fique acima das partículas */
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

/* Responsividade para fontes e layout */
@media (max-width: 768px) {
  .home-hero-section {
    /* NOVO: Ajusta a altura mínima para mobile, reduzindo a folga */
    min-height: 0px;
    /* Se ainda der scroll, pode tentar diminuir os 70px do footer para 60px ou 50px */
  }

  .first-name, .last-name {
    font-size: 3.5em;
  }
  .role-text {
    font-size: 1.4em;
  }
  .name-container {
    flex-direction: column;
    gap: 0;
  }
}

@media (max-width: 480px) {
  .first-name, .last-name {
    font-size: 2.5em;
  }
  .role-text {
    font-size: 1.2em;
  }
}
</style>