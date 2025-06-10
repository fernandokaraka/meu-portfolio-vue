<template>
  <div id="tsparticles" class="particles-background"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// As opções de configuração das partículas (iguais às anteriores)
const options = {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "grab"
      },
      resize: true
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      grab: {
        distance: 180,
        links: {
          opacity: 1
        }
      }
    }
  },
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.4,
      width: 1
    },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: false,
      speed: 2,
      straight: false
    },
    number: {
      density: {
        enable: true,
        area: 800
      },
      value: 80
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
};

onMounted(() => {
  // Inicializa tsparticles no elemento com id 'tsparticles'
  // Agora usamos window.tsParticles porque carregamos ele globalmente
  if (window.tsParticles) {
    window.tsParticles.load("tsparticles", options).then(() => {
      console.log("tsparticles loaded from global.");
    }).catch((error) => {
      console.error("Error loading tsparticles:", error);
    });
  } else {
    console.error("tsParticles global object not found.");
  }
});

onUnmounted(() => {
  // Destrói a instância de particles ao desmontar o componente
  if (window.tsParticles) {
    const container = window.tsParticles.dom().find(c => c.id === "tsparticles");
    if (container) {
      container.destroy();
    }
  }
});
</script>

<style scoped>
.particles-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1; /* Envia para trás do conteúdo */
  background-color: transparent; /* Garante que é transparente aqui */
  pointer-events: none; /* Garante que o fundo não bloqueie cliques em outros elementos */
}
</style>