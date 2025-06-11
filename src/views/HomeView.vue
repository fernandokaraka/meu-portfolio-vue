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
    <FancyButton text="offline" type="text-only" class="status-button" />
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
    /* NOVO: Reduz ainda mais a altura mínima para mobile */
    min-height: calc(100vh - 120px - 70px); /* 100vh - padding-top do content-area (120px para mobile) - Altura REAL do footer (70px aprox.) */
    /* Removi os 90px do footer e usei 70px como um ajuste mais agressivo */
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