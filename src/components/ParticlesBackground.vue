<template>
  <div id="tsparticles" class="particles-background"></div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

const options = {
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: false,
        mode: "push"
      },
      onHover: {
        enable: true,
        mode: "repulse"
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
      value: "#00aaff"
    },
    links: {
      color: "#00aaff",
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
      speed: 3,
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
  z-index: -1; 
  background-color: transparent; 
  pointer-events: none; 
}
</style>