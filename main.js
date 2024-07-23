// Configuración inicial
const totalTickets = 100000; // Número total de boletas
let soldTickets = 0; // Número de boletas vendidas
let progressBarWidth = 0; // Ancho actual de la barra de progreso
let targetWidth = 0; // Ancho objetivo de la barra de progreso
let progressPercentage = 0; // Porcentaje actual
let targetPercentage = 0; // Porcentaje objetivo
let animationFrameId; // ID del frame de animación

// Función para actualizar la barra de progreso
function updateProgressBar() {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentageElement = document.getElementById('progress-percentage');

  const percentSold = (soldTickets / totalTickets) * 100;
  targetWidth = percentSold;
  targetPercentage = percentSold;

  if (progressBarWidth !== targetWidth || progressPercentage !== targetPercentage) {
    if (progressBarWidth < targetWidth) {
      progressBarWidth += (targetWidth - progressBarWidth) / 18; // Incremento más suave
    } else {
      progressBarWidth -= (progressBarWidth - targetWidth) / 20; // Decremento más suave
    }

    if (progressPercentage < targetPercentage) {
      progressPercentage += (targetPercentage - progressPercentage) / 40; // Incremento del porcentaje más suave
    } else {
      progressPercentage -= (progressPercentage - targetPercentage) / 10; // Decremento del porcentaje más suave
    }

    progressBar.style.width = `${progressBarWidth}%`;
    progressPercentageElement.textContent = `${progressPercentage.toFixed(2)}%`;
    animationFrameId = requestAnimationFrame(updateProgressBar);
  } else {
    cancelAnimationFrame(animationFrameId); // Detener la animación
  }
}

// Función para vender boletas
function sellTickets(amount) {
  soldTickets += amount;
  updateProgressBar();
}

// Ejemplo de uso
sellTickets(13600); 