import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue'; // Importa o novo componente de Projetos
import ContactView from '../views/ContactView.vue';   // Importa o componente de Contato

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos', // A URL será /projetos
      name: 'projetos',
      component: ProjectsView // Aponta para o componente ProjectsView
    },
    {
      path: '/contato', // A URL será /contato
      name: 'contato',
      component: ContactView // Aponta para o componente ContactView
    }
  ]
});

export default router;