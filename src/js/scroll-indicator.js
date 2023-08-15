document.addEventListener('DOMContentLoaded', () => {
  // Obtener el elemento del indicador de desplazamiento
  const scrollIndicator = document.querySelector('.scroll-indicator');

  // Obtener el elemento de la barra de progreso
  const progressBar = scrollIndicator.querySelector('.progress-bar');

  // Escuchar el evento de scroll
  window.addEventListener('scroll', () => {
    //posición actual de desplazamiento vertical
    const scrollPosition = window.scrollY;

    // Calcular el porcentaje de página que se ha desplazado
    const scrollPercentage =
      (scrollPosition / (document.body.scrollHeight - window.innerHeight)) *
      100;

    // establecer ancho de la barra de progressBar en con la ayuda de scrollPercentage
    progressBar.style.width = scrollPercentage + '%';

    // Ocultar la barra de progreso cuando el usuario desplace hacia arriba
    if (scrollPercentage <= 0) {
      scrollIndicator.style.display = 'none';
    } else {
      scrollIndicator.style.display = 'block';
    }
  });
});
