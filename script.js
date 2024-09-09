window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    const message = this.document.getElementById("message")
    
    loader.classList.add("hidden");
    message.classList.remove("hidden");
  });


// Criando uma variável global para nos dizer em qual estado a tela atual se encontra.
var isFullScreen = false;
var elem = document.documentElement;

function AtivarDesativarFS() {
    // Se estiver em tela cheia, sair da tela cheia
    if (isFullScreen) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) { /* Firefox */
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) { /* Chrome, Safari & Opera */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE/Edge */
            document.msExitFullscreen();
        }
        isFullScreen = false;
    } else {
        // Caso contrário, entrar em tela cheia
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
        }
        isFullScreen = true;
    }
}

// Adicionar event listener para mudanças no estado de tela cheia
document.addEventListener('fullscreenchange', (event) => {
    isFullScreen = !!document.fullscreenElement;
});

document.addEventListener('webkitfullscreenchange', (event) => {
    isFullScreen = !!document.webkitFullscreenElement;
});

document.addEventListener('mozfullscreenchange', (event) => {
    isFullScreen = !!document.mozFullScreenElement;
});

document.addEventListener('MSFullscreenChange', (event) => {
    isFullScreen = !!document.msFullscreenElement;
});


function toggleMenu() {
    var menu = document.getElementById('menu_of');
    
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault(); // Bloqueia o comportamento padrão da tecla Tab
    }
});


