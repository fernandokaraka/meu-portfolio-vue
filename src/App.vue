<script setup>
import { RouterView, RouterLink } from 'vue-router';
import ParticlesBackground from './components/ParticlesBackground.vue';
</script>

<template>
  <div class="app-container">
    <ParticlesBackground />

    <header class="global-header">
      <div class="header-left">
        <RouterLink to="/" class="site-title-link">
          <span class="first-name-header">Fernando</span>
          <span class="last-name-header">Karakarian</span>
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
        <a href="https://linkedin.com/in/seu-perfil" target="_blank" class="social-icon">in</a>
        <a href="https://github.com/seu-perfil" target="_blank" class="social-icon">gh</a>
        <a href="#" class="social-icon">ig</a>
        <a href="#" class="social-icon">dc</a>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-background); /* **MANTENHA ESTA LINHA** */
  color: var(--color-text);
  position: relative;
  overflow-x: hidden;
}
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
  white-space: nowrap; /* Evita que o nome quebre em duas linhas prematuramente */
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
  gap: 15px; /* Mantemos o gap em 15px */
  /* Adicione um flex-shrink para que os links possam encolher se necessário */
  flex-shrink: 1;
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
  white-space: nowrap; /* Garante que o texto do link não quebre */
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
  color: var(--color-text-soft);
  text-decoration: none;
  font-size: 1.5em;
  transition: color 0.3s ease;
}

.social-icon:hover {
  color: var(--color-primary);
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
    flex-wrap: wrap; /* Adicionar flex-wrap para quebrar os links se não couberem */
  }
  .site-title-link {
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  .nav-link {
    font-size: 1em;
  }
  .content-area {
    padding-top: 120px;
  }
}
</style>