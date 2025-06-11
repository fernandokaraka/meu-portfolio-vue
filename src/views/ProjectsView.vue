<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'Site Institucional para Cliente X (WordPress)',
    description: 'Criação de um site completo para empresa X, utilizando temas e plugins premium, com foco em otimização de SEO e responsividade.',
    image: 'https://via.placeholder.com/400x250/FFD700/FFFFFF?text=Projeto+WordPress+1',
    link: 'https://exemplo.com/projeto-wordpress-1', // Link para o site real
  },
  {
    id: 2,
    title: 'E-commerce para Loja Y (WordPress + WooCommerce)',
    description: 'Desenvolvimento de uma loja virtual robusta com WooCommerce, incluindo gateways de pagamento personalizados e integração de estoque.',
    image: 'https://via.placeholder.com/400x250/ADD8E6/FFFFFF?text=Projeto+WordPress+2', 
    link: 'https://exemplo.com/projeto-wordpress-2',
  },
  {
    id: 3,
    title: 'Portfólio Pessoal (Vue.js)',
    description: 'Este próprio portfólio, desenvolvido com Vue.js e Vite, demonstrando minhas habilidades em front-end.',
    image: 'https://via.placeholder.com/400x250/90EE90/FFFFFF?text=Portfólio+Vue.js', 
    link: '#',
  },
 
]);
</script>

<template>
  <div class="page-content-wrapper">
    <h1>Meus Projetos</h1>
    <p class="section-description">Aqui você pode ver alguns dos trabalhos que realizei. Clique para detalhes!</p>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card card">
        <img :src="project.image" :alt="project.title" class="project-image">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <a :href="project.link" target="_blank" class="project-link">Ver Projeto</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-content-wrapper {
  padding: 40px 20px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

h1 {
  color: var(--color-text-header); 
  margin-bottom: 15px;
  font-size: 2.5em;
}

.section-description {
  color: var(--color-text-soft); 
  font-size: 1.1em;
  margin-bottom: 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px; 
  margin-top: 40px;
}

.project-card {
  padding: 25px; 
  text-align: left;
  display: flex; 
  flex-direction: column;
  justify-content: space-between; 
  transition: transform 0.3s ease-in-out, background-color 0.3s ease, box-shadow 0.3s ease; 
}

.project-image {
  width: 100%;
  height: 220px; 
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.project-card h3 {
  color: var(--color-text-header); 
  margin-bottom: 12px;
  font-size: 1.6em;
  font-weight: 600;
}

.project-card p {
  color: var(--color-text-soft); 
  font-size: 1em;
  line-height: 1.6;
  margin-bottom: 25px;
  flex-grow: 1; 
}

.project-link {
  display: inline-block;
  background-color: var(--color-secondary); 
  color: var(--color-text-light); 
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.95em;
  transition: background-color 0.3s ease, transform 0.2s ease;
  align-self: flex-start;
}

.project-link:hover {
  background-color: var(--color-secondary-hover);
  transform: translateY(-2px);
}
</style>