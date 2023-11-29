document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    let slideIndex = 0;
  
    function showSlides() {
      slideIndex++;
      if (slideIndex >= slider.children.length) {
        slideIndex = 0;
      }
  
      const translateValue = -slideIndex * 50; // Cada slide move 50% da largura
      slider.style.transform = `translateX(${translateValue}%)`;
  
      setTimeout(showSlides, 3000); // Mude o slide a cada 3 segundos (3000 milissegundos)
    }
  
    showSlides();
  });
  