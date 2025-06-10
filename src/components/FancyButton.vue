<script setup>
import { computed } from 'vue';

const props = defineProps({
  // O texto que o botão exibirá
  text: {
    type: String,
    required: true,
  },
  // O tipo de estilo do botão (e.g., 'primary', 'secondary', 'outline')
  type: {
    type: String,
    default: 'primary', // Padrão será o primary
    validator: (value) => ['primary', 'secondary', 'outline', 'text-only'].includes(value),
  },
});

// Propriedade computada para aplicar classes CSS dinamicamente
const buttonClass = computed(() => {
  return `btn-${props.type}`;
});
</script>

<template>
  <button :class="['fancy-button', buttonClass]">
    {{ text }}
  </button>
</template>

<style scoped>
/* Estilo base para todos os botões personalizados */
.fancy-button {
  padding: 12px 25px;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none; /* Para garantir que links não tenham sublinhado */
  display: inline-block; /* Para padding funcionar bem em links */
  text-align: center;
}

/* Estilo para o tipo 'primary' (usará a cor --color-primary) */
.btn-primary {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  border: 2px solid var(--color-primary);
}

.btn-primary:hover {
  background-color: var(--color-primary-hover);
  border-color: var(--color-primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para o tipo 'secondary' (usará a cor --color-secondary) */
.btn-secondary {
  background-color: var(--color-secondary);
  color: var(--color-text-light);
  border: 2px solid var(--color-secondary);
}

.btn-secondary:hover {
  background-color: var(--color-secondary-hover);
  border-color: var(--color-secondary-hover);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para o tipo 'outline' (bordas, sem preenchimento) */
.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: var(--color-text-light);
  transform: translateY(-2px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

/* Estilo para o tipo 'text-only' (apenas texto, para links inline) */
.btn-text-only {
  background: none;
  border: none;
  padding: 8px 15px;
  color: var(--color-primary);
  font-weight: 500;
}

.btn-text-only:hover {
  color: var(--color-primary-hover);
  text-decoration: underline;
  transform: none; /* Remove a translação */
  box-shadow: none; /* Remove a sombra */
}
</style>