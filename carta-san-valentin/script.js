// read custom message from query strings
const urlSearchParams = new URLSearchParams(window.location.search);
const messageCustom = urlSearchParams.get('message');

if (messageCustom) {
  const mainMessageElement = document.querySelector('#mainMessage');
  mainMessageElement.textContent = decodeURI(messageCustom);
}

const btnOpenElement = document.querySelector('#open');
const btnCloseElement = document.querySelector('#close');

btnCloseElement.disabled = true;

btnOpenElement.addEventListener('click', () => {
  btnOpenElement.disabled = true;
  btnCloseElement.disabled = false;

  const coverElement = document.querySelector('.cover');
  coverElement.classList.add('open-cover');

  setTimeout(() => {
    coverElement.style.zIndex = -1;
    const paperElement = document.querySelector('.paper');
    paperElement.classList.remove('close-paper');
    paperElement.classList.add('open-paper');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'block';

    // Generar corazones flotantes
    createFloatingHearts();
  }, 500);
});

btnCloseElement.addEventListener('click', () => {
  btnOpenElement.disabled = false;
  btnCloseElement.disabled = true;

  const coverElement = document.querySelector('.cover');
  const paperElement = document.querySelector('.paper');
  paperElement.classList.remove('open-paper');
  paperElement.classList.add('close-paper');

  setTimeout(() => {
    coverElement.style.zIndex = 0;
    coverElement.classList.remove('open-cover');

    // Animación del corazón
    const heartElement = document.querySelector('.heart');
    heartElement.style.display = 'none';
  }, 500);
});

// Función para crear corazones flotantes
function createFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const heart = document.createElement('div');
      heart.classList.add('floating-heart');
      heart.innerHTML = '♥';
      document.body.appendChild(heart);

      // Posición aleatoria dentro de la ventana (viewport)
      heart.style.left = Math.random() * window.innerWidth + 'px';
      heart.style.bottom = '-20px'; // Siempre empieza desde fuera de la pantalla
      heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración aleatoria
      heart.style.opacity = Math.random() * 0.5 + 0.5; // Opacidad aleatoria

      setTimeout(() => {
        heart.remove(); // Eliminar después de la animación
      }, 5000);
    }, i * 200);
  }
}