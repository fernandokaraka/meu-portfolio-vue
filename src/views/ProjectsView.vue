<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'AR Legalização',
    description: 'Site institucional focado em serviços de legalização de empresas, apresentando a atuação e os diferenciais da consultoria.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/887894d18309ed7dd03c56d31edaef85952e7111/public/images/ar-legalizacao.png?raw=true',
    link: 'https://arlegalizacao.com.br',
    technologies: ['wordpress', 'elementor', 'css3', 'elementor'], // EXEMPLO: Adicione suas tecnologias aqui
  },
  {
    id: 2,
    title: 'Student Pass',
    description: 'Plataforma para auxiliar estudantes na aquisição de passagens e organização de viagens de estudo, com foco em praticidade.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/student-pass.png?raw=true',
    link: 'https://estpass.com.br',
    technologies: ['wordpress' , 'html5', 'css3', 'elementor'], // EXEMPLO
  },
  {
    id: 3,
    title: 'Favela LLog',
    description: 'Projeto de logística e entregas com impacto social, conectando comunidades e facilitando o transporte de mercadorias.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/favelallog.png?raw=true',
    link: 'https://favelallog.com.br',
    technologies: ['wordpress', 'html5', 'css3' , 'elementor'], // EXEMPLO
  },
  {
    id: 4,
    title: 'Hplast Distribuidora',
    description: 'Site institucional de uma distribuidora de produtos plásticos, com catálogo online e informações sobre os produtos e a empresa.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/hplast.png?raw=true',
    link: 'https://hplastdistribuidora.com.br',
    technologies: ['wordpress', 'elementor', 'css3'], // EXEMPLO
  },
  {
    id: 5,
    title: 'Marfasa Embalagens',
    description: 'Página web para uma empresa de embalagens, mostrando a variedade de produtos e soluções para diferentes setores industriais.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/marfasa.png?raw=true',
    link: 'https://marfasa.com.br',
    technologies: ['wordpress', 'html5', 'css3', 'elementor'], // EXEMPLO
  },
  {
    id: 6,
    title: 'Marketaí (Founder)',
    description: 'Plataforma inovadora de marketing digital, onde atuei como founder, focada em soluções estratégicas e inteligência de mercado.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/marketai.png?raw=true',
    link: 'https://marketai.com.br',
    technologies: ['wordpress', 'html5', 'css3', 'elementor'], // EXEMPLO: Ícones Font Awesome para o que for possível
  },
  {
    id: 7,
    title: 'Padrão Kimura',
    description: 'Site para uma academia ou centro de treinamento focado em artes marciais, apresentando modalidades e horários.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/heron-kimura.png?raw=true',
    link: 'https://padraokimura.com.br',
    technologies: ['wordpress', 'html5', 'css3', 'elementor'], // EXEMPLO
  },
  {
    id: 8,
    title: 'Porto Real Med',
    description: 'Página para uma clínica ou centro médico, com informações sobre especialidades, agendamentos e corpo clínico.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/portorealmed.png?raw=true',
    link: 'https://portorealmed.com.br',
    technologies: ['wordpress', 'css3' , 'html5' , 'elementor'],// EXEMPLO
  },
  {
    id: 9,
    title: 'Sow Salads',
    description: 'Site de um restaurante ou serviço de alimentação saudável, com cardápio, delivery e informações nutricionais.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/Sow%20Salads.png?raw=true',
    link: 'https://sowsalads.com.br',
    technologies: ['wordpress', 'css3' , 'html5', 'elementor'],// EXEMPLO
  },
  {
    id: 10,
    title: 'Stockler Sindicancia',
    description: 'Página profissional para serviços de sindicância e investigação, detalhando a atuação e os serviços oferecidos.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/stockler.png?raw=true',
    link: 'https://stocklersindicancia.com.br',
    technologies: ['wordpress', 'css3' , 'html5', 'elementor'], // EXEMPLO
  },
  {
    id: 11,
    title: 'Via Pharma',
    description: 'Site de uma farmácia ou drogaria, com busca de produtos, informações sobre saúde e serviços online.',
    image: 'https://github.com/fernandokaraka/meu-portfolio-vue/blob/main/public/images/vpharma.png?raw=true',
    link: 'https://vpharma.com.br',
    technologies: ['wordpress', 'css3' , 'html5', 'elementor'], // EXEMPLO
  },
]);

// Função para retornar a classe do ícone Font Awesome baseada na tecnologia
const getTechIconClass = (tech) => {
  switch (tech) {
    case 'wordpress': return 'fab fa-wordpress';
    case 'elementor': return 'fas fa-paint-brush'; // Ícone genérico de design/ferramenta
    case 'woocommerce': return 'fas fa-shopping-cart'; // Ícone de e-commerce
    case 'javascript': return 'fab fa-js';
    case 'html5': return 'fab fa-html5';
    case 'css3': return 'fab fa-css3-alt';
    case 'php': return 'fab fa-php';
    case 'vuejs': return 'fab fa-vuejs';
    case 'vite': return 'fas fa-bolt'; // Ícone de raio/velocidade
    case 'seo': return 'fas fa-search'; // Ícone de busca
    case 'analytics': return 'fas fa-chart-line'; // Ícone de gráfico
    case 'marketing-digital': return 'fas fa-bullhorn'; // Ícone de megafone
    case 'ecommerce': return 'fas fa-store'; // Ícone de loja
    // Adicione mais casos conforme as tecnologias que você usar
    default: return 'fas fa-code'; // Ícone genérico para não mapeados
  }
};
</script>

<template>
  <div class="page-content-wrapper">
    <h1>Meus Projetos</h1>
    <p class="section-description">Aqui você pode ver alguns dos trabalhos que realizei. Clique para detalhes!</p>

    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card card">
        <img :src="project.image" :alt="project.title" class="project-image">
        <div class="project-details">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="project-tech-icons">
            <span v-for="tech in project.technologies" :key="tech" class="tech-icon-wrapper">
              <i :class="getTechIconClass(tech)" :title="tech.charAt(0).toUpperCase() + tech.slice(1)"></i>
            </span>
          </div>
        </div>
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
  max-width: 1400px; /* Aumentei a largura máxima para a grade de projetos */
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
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); /* Ajuste o minmax para cards menores */
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
  background-color: var(--color-background-soft); /* Garante que o card tenha um fundo */
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Sombra para o card */
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15); /* Sombra mais forte no hover */
}

.project-image {
  width: 100%;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
}

.project-details {
  flex-grow: 1; /* Faz os detalhes ocuparem o espaço central */
  margin-bottom: 20px; /* Espaço entre detalhes e o link */
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
  margin-bottom: 20px; /* Espaço entre descrição e ícones */
}

.project-tech-icons {
  display: flex;
  flex-wrap: wrap; /* Permite que os ícones quebrem a linha */
  gap: 10px; /* Espaçamento entre os ícones */
  margin-top: auto; /* Empurra os ícones para baixo dentro dos detalhes */
  margin-bottom: 10px; /* Espaço entre os ícones e o link */
}

.tech-icon-wrapper {
  color: var(--color-text-soft); /* Cor dos ícones */
  font-size: 1.5em; /* Tamanho dos ícones */
  transition: color 0.3s ease;
}

.tech-icon-wrapper i {
  /* Estilo básico para a tag <i> do Font Awesome */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px; /* Largura do ícone */
  height: 30px; /* Altura do ícone */
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1); /* Fundo sutil para o ícone */
  border: 1px solid var(--color-border);
}

.tech-icon-wrapper i:hover {
  color: var(--color-primary); /* Cor de destaque no hover */
  border-color: var(--color-primary);
  background-color: rgba(0, 170, 255, 0.2);
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
  align-self: flex-start; /* Alinha o botão à esquerda */
}

.project-link:hover {
  background-color: var(--color-secondary-hover);
  transform: translateY(-2px);
}

/* Responsividade para a grade de projetos */
@media (max-width: 1200px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr; /* Uma coluna em telas menores */
  }
  .page-content-wrapper {
    padding: 20px 10px;
  }
  .project-card {
    padding: 20px;
  }
  h1 {
    font-size: 2em;
  }
  .section-description {
    font-size: 1em;
  }
  .project-card h3 {
    font-size: 1.4em;
  }
  .project-tech-icons {
    gap: 8px;
  }
  .tech-icon-wrapper i {
    width: 28px;
    height: 28px;
    font-size: 1.3em;
  }
}

@media (max-width: 480px) {
  .project-image {
    height: 180px;
  }
  .project-card h3 {
    font-size: 1.2em;
  }
  .project-card p {
    font-size: 0.9em;
  }
  .project-link {
    padding: 8px 15px;
    font-size: 0.85em;
  }
}
</style>