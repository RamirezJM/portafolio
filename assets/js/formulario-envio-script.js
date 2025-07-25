document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusMessage = document.getElementById('status-message');
  const submitButton = document.getElementById('btn-submit');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    statusMessage.textContent = 'Enviando...';
    submitButton.disabled = true;

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json' 
        }
      });

      if (response.ok) { 
        statusMessage.textContent = '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.';
        statusMessage.style.color = 'green'; 
        form.reset(); 
      } else { 
        const data = await response.json(); 
        if (data.errors) {
          statusMessage.textContent = 'Error: ' + data.errors.map(error => error.message).join(', ');
        } else {
          statusMessage.textContent = 'Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo.';
        }
        statusMessage.style.color = 'red'; 
      }
    } catch (error) {
      console.error('Error de red o inesperado:', error);
      statusMessage.textContent = 'No se pudo conectar con el servidor. Revisa tu conexión a internet.';
      statusMessage.style.color = 'red'; 
    } finally {
      submitButton.disabled = false; 
      
      setTimeout(() => {
        statusMessage.textContent = '';
        statusMessage.style.color = '';
      }, 5000); 
    }
  });
});