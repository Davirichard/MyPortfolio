document.addEventListener("DOMContentLoaded", function() {
    function animateNumber(elementId, finalNumber, duration, interval) {
        const numeroElement = document.getElementById(elementId);
        let animationFrameId;
        
        const increment = finalNumber / (duration / interval);

        function updateNumber(currentNumber) {
            numeroElement.textContent = Math.round(currentNumber) + "+";

            if (currentNumber < finalNumber) {
                animationFrameId = setTimeout(() => updateNumber(currentNumber + increment), interval);
            } else {
                numeroElement.textContent = finalNumber + "+";
            }
        }

        function handleScroll() {
            const elementoComClasse = document.querySelector('.box-experiencia');
            if (isElementInViewport(elementoComClasse)) {
                numeroElement.style.visibility = 'visible';
                clearTimeout(animationFrameId);
                updateNumber(0);
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);  // Para ativar também quando redimensionar a janela
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    animateNumber("numero", 3, 2500, 25);
    animateNumber("numero2", 6, 2500, 25);
    animateNumber("numero3", 18, 2500, 25);
});
