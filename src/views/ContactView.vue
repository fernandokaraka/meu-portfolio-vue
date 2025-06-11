<template>
  <div class="contact-section">
    <div class="contact-container">
      <h1 class="contact-title">Entre em Contato</h1>
      <p class="contact-subtitle">
        Gostaria de discutir um projeto ou apenas dizer olá? Preencha o formulário abaixo!
      </p>
      
      <div class="contact-content">
        <!-- Form -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="enviarMensagem">
            <div class="form-group">
              <label for="nome">Seu Nome:</label>
              <input 
                type="text" 
                id="nome" 
                v-model="form.nome" 
                placeholder="Digite seu nome completo"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="email">Seu Email:</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                placeholder="seu.email@example.com"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="assunto">Assunto:</label>
              <input 
                type="text" 
                id="assunto" 
                v-model="form.assunto" 
                placeholder="Ex: Orçamento de Projeto"
                required
              />
            </div>
            
            <div class="form-group">
              <label for="mensagem">Mensagem:</label>
              <textarea 
                id="mensagem" 
                v-model="form.mensagem" 
                placeholder="Descreva sua mensagem aqui..."
                rows="6"
                required
              ></textarea>
            </div>
            
            <button type="submit" class="submit-btn">
              Enviar Mensagem
            </button>
          </form>
        </div>
        
        <!-- Contato -->
        <div class="contact-info">
          <h3>Ou, se preferir, me encontre em:</h3>
          
          <div class="contact-item">
            <span class="contact-label">Email:</span>
            <a href="mailto:fernando@karakanian.com.br" class="contact-link">
              fernando@karakanian.com.br
            </a>
          </div>
          
          <div class="contact-item">
            <span class="contact-label">LinkedIn:</span>
            <a href="https://linkedin.com/in/fernando-karakanian/" class="contact-link" target="_blank">
              linkedin.com/in/fernando-karakanian/
            </a>
          </div>
          
          <div class="contact-item">
            <span class="contact-label">WhatsApp:</span>
            <a href="https://wa.me/5511931510669" class="contact-link" target="_blank">
              wa.me/5511931510669
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContatoView',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      }
    }
  },
  methods: {
    enviarMensagem() {
      // Lógica para enviar a mensagem
      console.log('Mensagem enviada:', this.form);
      // Aqui você pode integrar com um serviço de email ou API
      alert('Mensagem enviada com sucesso!');
      
      // Limpar formulário
      this.form = {
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      };
    }
  }
}
</script>

<style scoped>
.contact-section {
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #00bcd4, #4fc3f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 3rem;
  opacity: 0.9;
}

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.contact-form-wrapper {
  background: rgba(42, 42, 42, 0.8);
  padding: 2rem;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #00bcd4;
}

.form-group input,
.form-group textarea {
  width:90%;
  padding: 1rem;
  border: 2px solid #333;
  border-radius: 8px;
  background-color: #1a1a1a;
  color: white;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #00bcd4;
  box-shadow: 0 0 0 3px rgba(0, 188, 212, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #666;
}

.submit-btn {
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(45deg, #00bcd4, #4fc3f7);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 188, 212, 0.3);
}

.contact-info {
  padding: 2rem 0;
}

.contact-info h3 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #00bcd4;
}

.contact-item {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: rgba(42, 42, 42, 0.5);
  border-radius: 8px;
  border-left: 4px solid #00bcd4;
}

.contact-label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #ccc;
}

.contact-link {
  color: #00bcd4;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: #4fc3f7;
  text-decoration: underline;
}

/* Responsividade */
@media (max-width: 768px) {
  .contact-section {
    padding: 1rem;
  }
  
  .contact-title {
    font-size: 2rem;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .contact-form-wrapper {
    padding: 1.5rem;
  }
}

@media (max-width: 480px) {
  .contact-title {
    font-size: 1.5rem;
  }
  
  .contact-form-wrapper {
    padding: 1rem;
  }
  
  .form-group input,
  .form-group textarea {
    padding: 0.8rem;
  }
}
</style>