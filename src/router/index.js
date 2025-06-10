import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projetos',
      name: 'projetos',
      component: ProjectsView
    },
    {
      path: '/contato',
      name: 'contato',
      component: ContactView
    }
  ]
});

export default router;