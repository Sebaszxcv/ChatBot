const responses = {
    'hola': '¡Hola! ¿Cómo estás?',
    'adiós': '¡Adiós! Que tengas un buen día.',
    'cómo estás': 'Estoy bien, gracias por preguntar.',
    'qué puedes hacer': 'Puedo responder a tus preguntas básicas.'
  };
  
  function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim().toLowerCase();
  
    if (message === '') return;
  
    addMessage('user', message);
    input.value = '';
  
    setTimeout(() => {
      const response = getResponse(message);
      addMessage('bot', response);
    }, 500);
  }
  
  function addMessage(sender, text) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  function getResponse(message) {
    return responses[message] || 'Lo siento, no entiendo esa pregunta.';
  }
  

  document.getElementById('user-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        
        return;
      } else {
        event.preventDefault();
        sendMessage();
      }
    }
  });
  