<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="app-container">
    <ParticlesBackground />

    <header class="global-header">
      <div class="header-left">
        <RouterLink to="/" class="site-title-link">
          <span class="first-name-header">Fernando</span>
          <span class="last-name-header">Karakanian</span>
        </RouterLink>
      </div>
      <nav class="header-nav">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/projetos" class="nav-link">Projetos</RouterLink>
        <RouterLink to="/contato" class="nav-link">Contato</RouterLink>
      </nav>
    </header>

    <main class="content-area">
      <RouterView />
    </main>

    <footer class="main-footer">
      <p>&copy; {{ new Date().getFullYear() }} Meu Portfólio. Todos os direitos reservados.</p>
      <div class="social-icons">
        <a href="https://www.linkedin.com/in/fernando-karakanian/" target="_blank" class="social-icon" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i> </a>
        <a href="https://github.com/fernandokaraka" target="_blank" class="social-icon" aria-label="GitHub">
          <i class="fab fa-github"></i> </a>
        <a href="https://instagram.com/fernandokaraka_tech" target="_blank" class="social-icon" aria-label="Instagram">
          <i class="fab fa-instagram"></i> </a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* IMPORTANTE: Importa os estilos do Font Awesome */
@import '@fortawesome/fontawesome-free/css/all.min.css';

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  color: var(--color-text);
  position: relative;
  overflow-x: hidden;
}

/* ---------------------------------------------------- */
/* Estilo do Cabeçalho Global                      */
/* ---------------------------------------------------- */
.global-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background-color: transparent;
  box-sizing: border-box;
}

.site-title-link {
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 700;
  color: var(--color-text-header);
  transition: color 0.3s ease;
  display: flex;
  gap: 8px;
  white-space: nowrap;
}

.site-title-link:hover {
  color: var(--color-primary);
}

.first-name-header {
  color: var(--color-text-header);
}

.last-name-header {
  color: var(--color-primary);
}

.header-nav {
  display: flex;
  gap: 15px;
  flex-shrink: 1;
  flex-wrap: nowrap;
}

.nav-link {
  color: var(--color-text-light);
  text-decoration: none;
  font-size: 1.1em;
  font-weight: 500;
  padding: 8px 15px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background-color: rgba(0, 170, 255, 0.1);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  border-color: var(--color-primary);
}

/* Área de Conteúdo */
.content-area {
  flex-grow: 1;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  box-sizing: border-box;
}

/* Rodapé */
.main-footer {
  background-color: transparent;
  color: var(--color-text-soft);
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
  margin-top: auto;
  border-top: none;
  z-index: 1000;
}

.social-icons {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.social-icon {
  color: var(--color-text-soft); /* Cor padrão dos ícones */
  text-decoration: none;
  font-size: 1.8em; /* Tamanho dos ícones */
  transition: color 0.3s ease, background-color 0.3s ease;
  width: 40px; /* Garante que todos os ícones tenham uma área clicável consistente */
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%; /* Fazem os ícones ficarem em círculos se tiver background */
}

.social-icon:hover {
  color: var(--color-primary); /* Cor de destaque no hover */
  background-color: rgba(0, 170, 255, 0.1); /* Fundo sutil no hover */
}

/* Responsividade básica para o cabeçalho */
@media (max-width: 768px) {
  .global-header {
    flex-direction: column;
    padding: 15px 20px;
    align-items: flex-start;
  }
  .header-nav {
    margin-top: 10px;
    gap: 10px;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;
  }
  .site-title-link {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .nav-link {
    font-size: 1em;
    padding: 5px 8px;
  }
  .content-area {
    padding-top: 120px;
  }
}
</style>