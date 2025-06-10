<script setup>
import { RouterView } from 'vue-router';
// Não precisamos mais de ref e onMounted para o tema, pois será fixo
// import { ref, onMounted } from 'vue'; // REMOVA ESTA LINHA
// import AppNavbar from './components/AppNavbar.vue'; // Já havia sido removido/comentado

// REMOVA TODO O BLOCO DE LÓGICA DO TEMA
// const isDarkTheme = ref(false);
// const toggleTheme = () => {
//   isDarkTheme.value = !isDarkTheme.value;
//   document.body.classList.toggle('dark-theme', isDarkTheme.value);
//   localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
// };
// onMounted(() => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     isDarkTheme.value = true;
//     document.body.classList.add('dark-theme');
//   } else {
//     isDarkTheme.value = false;
//     document.body.classList.remove('dark-theme');
//   }
//   if (!savedTheme) {
//     isDarkTheme.value = true;
//     document.body.classList.add('dark-theme');
//     localStorage.setItem('theme', 'dark');
//   }
// });
</script>

<template>
  <div class="app-container">
    <header class="main-header">
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
/* Estilos específicos do App.vue */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: var(--color-background); /* Continua usando a variável de fundo */
  color: var(--color-text); /* Continua usando a variável de texto */
}

/* Cabeçalho */
.main-header {
  background-color: transparent;
  padding: 0;
  box-shadow: none;
  height: 0;
  overflow: hidden;
  width: 100%;
}

/* Área de Conteúdo */
.content-area {
  flex-grow: 1;
  padding: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
</style>