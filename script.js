window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const message = this.document.getElementById("message")
    
    loader.classList.add("hidden");
    message.classList.remove("hidden");
  });



  window.addEventListener('load', () => {
    const timeElement = document.getElementById('time');
    const locationElement = document.getElementById('location');
  
    // Função para obter a hora atual formatada
    function getCurrentTime() {
      const now = new Date();
      return now.toLocaleTimeString('pt-BR');
    }
  
    // Atualizar a hora a cada segundo
    setInterval(() => {
      timeElement.textContent = "Hora atual: " + getCurrentTime();
    }, 1000);

  });
  