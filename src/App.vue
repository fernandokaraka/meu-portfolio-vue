<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue'; // Importa ref e onMounted

const isDarkTheme = ref(false);

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  document.body.classList.toggle('dark-theme', isDarkTheme.value);
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme.value = true;
    document.body.classList.add('dark-theme');
  }
});
</script>

<template>
  <div class="app-container">
    <header class="main-header">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/projetos" class="nav-link">Projetos</RouterLink>
        <RouterLink to="/contato" class="nav-link">Contato</RouterLink>
      </nav>
      <button @click="toggleTheme" class="theme-toggle-btn">
        {{ isDarkTheme ? 'Modo Claro' : 'Modo Escuro' }}
      </button>
    </header>

    <main class="content-area">
      <RouterView />
    </main>

    <footer class="main-footer">
      <p>&copy; {{ new Date().getFullYear() }} Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  </div>
</template>

<style scoped>
/* Reset básico e fontes - Estes deveriam estar no base.css, mas se estão aqui e funcionando... */
/* Se vc já tem eles no base.css como modifiquei acima, pode remover estas duas regras daqui */
/* * {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: background-color 0.3s ease, color 0.3s ease;
} */

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%; /* Garante que o container da aplicação ocupe toda a largura */
  background-color: var(--color-background);
  color: var(--color-text);
  /* Remova max-width daqui se houver */
}

/* Cabeçalho */
.main-header {
  background-color: var(--color-background-dark);
  padding: 18px 20px;
  box-shadow: 0 3px 8px var(--color-shadow-medium);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Garante que o header ocupe 100% da largura do pai */
}

.main-header nav {
  display: flex;
  gap: 40px;
  /* Apenas justify-content: center; para centralizar os links se o nav não ocupar toda a largura */
  /* ou remove para deixar os links alinhados à esquerda do nav */
}

.nav-link {
  color: var(--color-text-light);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.15em;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-primary-hover);
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  background-color: rgba(66, 185, 131, 0.1);
}

.theme-toggle-btn {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;
}

.theme-toggle-btn:hover {
  background-color: var(--color-primary-hover);
}

/* Área de Conteúdo - Ajustes */
.content-area {
  flex-grow: 1;
  padding: 0; /* Removendo o padding global daqui */
  width: 100%; /* Ocupa 100% da largura disponível */
  /* Não precisamos de max-width aqui, pois as views internas já terão */
  /* display: flex; justify-content: center; align-items: flex-start;  */
  /* Removemos esses pois eles estavam centralizando o conteúdo */
}

/* Rodapé */
.main-footer {
  background-color: var(--color-background-dark);
  color: var(--color-text-light);
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  width: 100%; /* Garante que o footer ocupe 100% da largura do pai */
}
</style>