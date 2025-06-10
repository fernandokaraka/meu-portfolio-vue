<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';

// Variável reativa para controlar o tema
const isDarkTheme = ref(false);

// Função para alternar o tema
const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value;
  // Adiciona ou remove a classe 'dark-theme' do body
  document.body.classList.toggle('dark-theme', isDarkTheme.value);
  // Salva a preferência no localStorage
  localStorage.setItem('theme', isDarkTheme.value ? 'dark' : 'light');
};

// Ao montar o componente, verifica a preferência salva
onMounted(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    isDarkTheme.value = true;
    document.body.classList.add('dark-theme');
  } else {
    // Se não houver preferência ou for 'light', garanta que 'dark-theme' não está lá
    isDarkTheme.value = false;
    document.body.classList.remove('dark-theme');
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
/* Estilos específicos do App.vue, usando as variáveis */
.app-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%; /* Garante que o container da aplicação ocupe toda a largura */
  background-color: var(--color-background); /* Usando variável */
  color: var(--color-text); /* Usando variável */
}

/* Cabeçalho */
.main-header {
  background-color: var(--color-background-dark); /* Usando variável */
  padding: 18px 20px;
  box-shadow: 0 3px 8px var(--color-shadow-medium); /* Usando variável */
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Garante que o header ocupe 100% da largura do pai */
}

.main-header nav {
  display: flex;
  gap: 40px;
}

.nav-link {
  color: var(--color-text-light); /* Usando variável */
  text-decoration: none;
  font-weight: 600;
  font-size: 1.15em;
  padding: 8px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: var(--color-primary-hover); /* Ou uma cor rgba para hover */
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
  background-color: rgba(66, 185, 131, 0.1); /* Manter rgba para sutilidade */
}

/* Botão de alternar tema */
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
}

/* Rodapé */
.main-footer {
  background-color: var(--color-background-dark); /* Usando variável */
  color: var(--color-text-light); /* Usando variável */
  text-align: center;
  padding: 20px 0;
  font-size: 0.9em;
  margin-top: auto;
  border-top: 1px solid var(--color-border);
  width: 100%; /* Garante que o footer ocupe 100% da largura do pai */
}
</style>