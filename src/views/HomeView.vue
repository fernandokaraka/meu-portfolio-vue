<script setup>
</script>

<template>
  <main class="page-content-wrapper">
    <section class="hero-section card">
      <img src="/src/assets/profile.jpg" alt="Sua Foto de Perfil" class="profile-pic"> <h2>Olá! Eu sou [Seu Nome]</h2>
      <p>Desenvolvedor Web focado em criar experiências digitais incríveis.</p>
      <p>Com experiência em WordPress e um novo foco em JavaScript e Vue.js.</p>
      <router-link to="/projetos" class="cta-button">Ver Meus Projetos</router-link>
    </section>
  </main>
</template>

<style scoped>
.page-content-wrapper {
  padding: 40px 20px; /* Padding interno do container da página */
  text-align: center;
  width: 100%;
  margin: 0 auto; /* Centraliza o conteúdo dentro do 100% de largura do content-area */
}

.card {
  background-color: var(--color-background-soft); /* Usando variável */
  padding: 50px;
  border-radius: 12px; /* Bordas mais arredondadas */
  box-shadow: 0 6px 20px var(--color-shadow-medium); /* Sombra mais suave e evidente */
  transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease; /* Transição para cores e sombra */
}

.card:hover {
  transform: translateY(-5px); /* Efeito de elevação sutil no hover */
}

.profile-pic {
  width: 150px;
  height: 150px;
  border-radius: 50%; /* Faz a imagem ser redonda */
  object-fit: cover; /* Garante que a imagem preencha sem distorcer */
  border: 4px solid var(--color-primary); /* Borda colorida em volta da foto */
  margin-bottom: 25px;
  box-shadow: 0 0 0 8px rgba(66, 185, 131, 0.2); /* Anel externo sutil */
}

.hero-section h2 {
  color: var(--color-text-header); /* Usando variável */
  font-size: 2.8em; /* Fonte maior */
  margin-bottom: 15px;
  font-weight: 700; /* Mais negrito */
}

.hero-section p {
  color: var(--color-text-soft); /* Usando variável */
  font-size: 1.25em; /* Fonte um pouco maior */
  line-height: 1.7;
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  background-color: var(--color-primary); /* Usando variável */
  color: var(--color-text-light); /* Usando variável */
  padding: 15px 35px; /* Mais padding */
  border-radius: 8px; /* Bordas mais arredondadas */
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1em;
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
  background-color: var(--color-primary-hover); /* Usando variável */
  transform: translateY(-2px); /* Pequena elevação no hover */
}
</style>