<script setup>
</script>

<template>
  <main class="page-content-wrapper">
    <section class="hero-section card">
      <img src="/src/assets/profile.jpg" alt="Sua Foto de Perfil" class="profile-pic">
      <h2>Olá! Eu sou [Seu Nome]</h2>
      <p>Desenvolvedor Web focado em criar experiências digitais incríveis.</p>
      <p>Com experiência em WordPress e um novo foco em JavaScript e Vue.js.</p>
      <router-link to="/projetos" class="cta-button">Ver Meus Projetos</router-link>
    </section>
  </main>
</template>

<style scoped>
.page-content-wrapper {
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
}

.card {
  background-color: var(--color-background-soft); /* Usando variável */
  padding: 50px;
  border-radius: 12px;
  box-shadow: 0 6px 20px var(--color-shadow-medium); /* Usando variável */
  transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease; /* Transição para cores e sombra */
}

.card:hover {
  transform: translateY(-5px);
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid var(--color-primary); /* Usando variável */
  margin-bottom: 25px;
  box-shadow: 0 0 0 8px rgba(66, 185, 131, 0.2);
}

.hero-section h2 {
  color: var(--color-text-header); /* Usando variável */
  font-size: 2.8em;
  margin-bottom: 15px;
  font-weight: 700;
}

.hero-section p {
  color: var(--color-text-soft); /* Usando variável */
  font-size: 1.25em;
  line-height: 1.7;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  background-color: var(--color-primary); /* Usando variável */
  color: var(--color-text-light); /* Usando variável */
  padding: 15px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: var(--color-primary-hover); /* Usando variável */
  transform: translateY(-2px);
}
</style>