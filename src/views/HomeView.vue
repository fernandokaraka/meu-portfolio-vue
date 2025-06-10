<script setup>
import FancyButton from '../components/FancyButton.vue';
import ParticlesBackground from '../components/ParticlesBackground.vue'; // Importa o componente de partículas
</script>

<template>
  <main class="home-hero-section">
    <ParticlesBackground /> <div class="name-container">
      <h1 class="first-name">Fernando</h1> <h1 class="last-name">Karakarian</h1> </div>
    <h2 class="role-text">Desenvolvedor Front-End<span class="cursor">|</span></h2>
    <FancyButton text="offline" type="text-only" class="status-button" />

    <div class="top-right-nav">
      <router-link to="/" class="top-nav-link">Home</router-link> <router-link to="/projetos" class="top-nav-link">Projetos</router-link>
      <router-link to="/contato" class="top-nav-link">Contato</router-link>
    </div>
  </main>
</template>

<style scoped>
.home-hero-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Garante que a seção ocupe a altura total */
  text-align: center;
  width: 100%; /* Ocupa 100% da largura do content-area */
  position: relative; /* Para posicionar a navegação superior-direita */
  /* background-color: transparent; O background será das partículas e do body */
}

.name-container {
  display: flex; /* Para colocar Fernando e Karakarian lado a lado */
  gap: 20px; /* Espaço entre "Fernando" e "Karakarian" */
  margin-bottom: 10px;
}

.first-name, .last-name {
  font-size: 5em; /* Tamanho grande para o nome */
  font-weight: 700; /* Negrito */
  line-height: 1; /* Altura da linha justa */
  letter-spacing: -2px; /* Pequeno ajuste para proximidade */
  color: var(--color-text-header); /* Cor padrão do texto (branco no dark mode) */
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3); /* Um brilho sutil */
  transition: color 0.3s ease; /* Transição para o modo claro */
}

.last-name {
  color: var(--color-primary); /* "Karakarian" em azul vibrante */
}

.role-text {
  font-size: 1.8em;
  font-weight: 400;
  color: var(--color-text-soft);
  margin-bottom: 25px;
  position: relative;
  display: inline-block; /* Para o cursor funcionar ao lado */
}

.cursor {
  font-weight: 300;
  animation: blink 0.7s infinite alternate; /* Animação de piscar */
  position: absolute;
  right: -15px; /* Posição do cursor */
  top: 0;
  color: var(--color-primary); /* Cor do cursor */
}

@keyframes blink {
  from { opacity: 1; }
  to { opacity: 0; }
}

.status-button {
  font-size: 0.9em;
  padding: 5px 12px;
  border-radius: 20px; /* Mais arredondado */
  background-color: var(--color-background-soft); /* Fundo sutil */
  color: var(--color-text-soft); /* Texto suave */
  border: 1px solid var(--color-border); /* Borda sutil */
  margin-bottom: 50px; /* Espaço abaixo do botão */
  pointer-events: none; /* Não clicável */
}

/* Links no canto superior direito */
.top-right-nav {
  position: absolute;
  top: 40px;
  right: 40px;
  display: flex;
  gap: 25px;
}

.top-nav-link {
  color: var(--color-text-light); /* Branco */
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  padding: 8px 15px; /* Aumentar a área clicável */
  border: 1px solid transparent; /* Borda transparente para não "pular" no hover */
  border-radius: 5px;
  transition: all 0.3s ease;
}

.top-nav-link:hover {
  color: var(--color-primary); /* Azul no hover */
  border-color: var(--color-primary); /* Borda azul no hover */
  background-color: rgba(0, 170, 255, 0.1); /* Fundo sutil no hover */
}

/* Responsividade básica para fontes */
@media (max-width: 768px) {
  .first-name, .last-name {
    font-size: 3.5em;
  }
  .role-text {
    font-size: 1.4em;
  }
  .name-container {
    flex-direction: column; /* Nome em duas linhas em mobile */
    gap: 0;
  }
  .top-right-nav {
    top: 20px;
    right: 20px;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .first-name, .last-name {
    font-size: 2.5em;
  }
  .role-text {
    font-size: 1.2em;
  }
  .top-right-nav {
    flex-direction: column; /* Links um abaixo do outro */
    align-items: flex-end;
  }
}
</style>