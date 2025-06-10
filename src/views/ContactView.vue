<script setup>
</script>

<template>
  <div class="page-content-wrapper">
    <div class="contact-section card">
      <h1>Entre em Contato</h1>
      <p>Gostaria de discutir um projeto ou apenas dizer olá? Sinta-se à vontade para me contatar!</p>
      <div class="contact-info">
        <p>Email: <a href="mailto:seu.email@example.com">seu.email@example.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/seu-perfil" target="_blank">linkedin.com/in/seu-perfil</a></p>
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

/* Class 'card' já lida com background-color e box-shadow */
.contact-section { }

h1 {
  color: var(--color-text-header); /* Usando variável */
  margin-bottom: 25px;
  font-size: 2.2em;
}

p {
  color: var(--color-text-soft); /* Usando variável */
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
}

.contact-info {
  margin-top: 30px;
  padding: 25px; /* Mais padding */
  background-color: var(--color-background-alt); /* Usando variável */
  border-radius: 8px;
  border: 1px solid var(--color-border); /* Usando variável */
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.contact-info p {
  margin-bottom: 12px;
  font-size: 1.05em;
}

.contact-info a {
  color: var(--color-secondary); /* Usando variável */
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease;
}

.contact-info a:hover {
  color: var(--color-secondary-hover); /* Usando variável */
  text-decoration: underline;
}
</style>